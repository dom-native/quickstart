import { exec, spawn } from 'child_process';

// from - https://github.com/smallyard/webhere/blob/master/src/server.js
// Had to overrid it to allow opening on a specific file

export function openBrowser(url: string) {
	try {
		switch (process.platform) {
			case "darwin":
				exec("open " + url);
				break;
			case "win32":
				exec("start " + url);
				break;
			default:
				spawn("xdg-open", [url]);
		}
	} catch (e) {
		console.log("Can't open browser, cause by: " + e)
	}
};