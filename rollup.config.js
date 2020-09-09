
import rollup_cjs from '@rollup/plugin-commonjs';
import rollup_multi from '@rollup/plugin-multi-entry';
import rollup_re from '@rollup/plugin-node-resolve';
import rollup_ts from 'rollup-plugin-typescript2';

// NOTE: In this project, we will use the multi-entry plugin from rollup. 
//       Some projects might want to just input a single entry file.

export default [{
	input: './src/**/*.ts',
	output: {
		file: './dist/app-bundle.js',
		format: 'iife',
		name: 'bundle',
		sourcemap: true
	},
	plugins: [
		rollup_multi(),
		rollup_cjs(),
		rollup_re(),
		rollup_ts()]
}

]

