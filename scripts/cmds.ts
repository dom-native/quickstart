import { router } from 'cmdrouter';
import * as fs from 'fs-extra-plus';
import { spawn } from 'p-spawn';
import { wait } from 'utils-min';
import { openBrowser } from './utils';


const SKETCH_PATH = '.design/ui-assets.sketch';
const SYMBOLS_TS_PATH = 'src/icons-default.ts'

router({ watch, build }).route();


async function build() {
	await fs.saferRemove('./dist/');

	await spawn('npm', ['run', 'build-js']);
	await spawn('npm', ['run', 'build-css']);
}


async function watch() {

	// first make sure a full build
	await build();

	// start the watch session
	spawn('npm', ['run', 'build-js', '--', '-w']);
	spawn('npm', ['run', 'build-css', '--', '-w']);

	spawn('npm', ['run', 'sketchdev', '--', '-w']);

	// start the webhere web server
	spawn('./node_modules/.bin/webhere', ['-p', '8888', '-s'], { onStdout: () => { } });

	// start the live reload server which will reload the app and css on dist .js and .css changes
	spawn('./node_modules/.bin/livereload', ['"dist/, svg/"', '--extraExts', 'svg', '-w', '500'], { shell: true });

	// wait that the server is full started
	await wait(500);

	// open the browser
	openBrowser('http://localhost:8888/index.html');

}

