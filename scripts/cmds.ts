import chokidar from 'chokidar';
import { router } from 'cmdrouter';
import execa, { ExecaChildProcess } from 'execa';
import * as fs from 'fs-extra-plus';
import { readFile } from 'fs-extra-plus';
import debounce from 'lodash.debounce';
import { isEmpty, wait } from 'utils-min';
import { openBrowser } from './utils';


const SKETCH_PATH = '.design/ui-assets.sketch';
const SYMBOLS_TS_PATH = 'src/icons-default.ts'

router({ watch, build }).route();

const { stdout, stderr } = process;

async function build() {
	await fs.saferRemove('./dist/');

	await execa('npm', ['run', 'build-js'], { stdout, stderr });
	await execa('npm', ['run', 'build-css'], { stdout, stderr });
}


async function watch() {

	// first make sure a full build
	await build();

	// start the watch session
	watchJs();
	execa('npm', ['run', 'build-css', '--', '-w'], { stdout, stderr });

	execa('npm', ['run', 'sketchdev', '--', '-w'], { stdout, stderr });

	// start the webhere web server
	execa('./node_modules/.bin/webhere', ['-p', '8888', '-s'], { stderr });

	// start the live reload server which will reload the app and css on dist .js and .css changes
	execa('./node_modules/.bin/livereload', ['"dist/, svg/"', '--extraExts', 'svg', '-w', '500'], { shell: true, stdout, stderr });

	// wait that the server is full started
	await wait(500);

	// open the browser
	openBrowser('http://localhost:8888/index.html');

}


// A little extra work on watch typescript/js to restart when add file
async function watchJs() {
	let buildjsExeca: ExecaChildProcess | undefined;
	// files that have been added but still empty, so need to wait on change
	const pendingEditFiles = new Set<string>();

	// restart function
	async function startBuildWatch() {
		let jsPro: Promise<any>;
		if (buildjsExeca) {
			buildjsExeca.kill();
			await wait(200);
		}

		pendingEditFiles.clear(); // some non-critical unhandled corner cases (some files might still be empty)
		buildjsExeca = execa('npm', ['run', 'build-js', '--', '-w'], { stdout, stderr });

		buildjsExeca.catch(ex => { // to avoid unhandled exception
			console.log('npm run build-js terminated');
		});
	}

	// start the initial build and watch
	await startBuildWatch();

	const startBuildWatchDebounced = debounce(startBuildWatch, 300);


	const codeWatch = chokidar.watch('src/**/*.ts', { depth: 99, ignoreInitial: true, persistent: true });
	async function handleChange(action: 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir', file: string,) {

		// FILE ADDED - build only if new file is not empty, otherwise, add to watch pendingEditFiles list.
		if (action === 'add') {
			const content = await readFile(file, 'utf-8');
			if (!isEmpty(content)) {
				startBuildWatchDebounced();
			} else {
				pendingEditFiles.add(file);
			}
		}
		// FILE CHANGED - restart watch session only if file changed was in the pending list.
		else if (action === 'change' && pendingEditFiles.has(file)) {
			const content = await readFile(file, 'utf-8');
			if (!isEmpty(content)) {
				startBuildWatchDebounced();
			}
		}
		// Note: rollup-typescript2 watch handle this case, so nothing to do. 
	}

	codeWatch.on('all', handleChange);

}

