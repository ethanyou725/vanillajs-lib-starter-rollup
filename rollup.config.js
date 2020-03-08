import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from "@rollup/plugin-buble"; // Transpile/polyfill with reasonable browser support

import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/lib.js',
		output: {
			name: 'add-lib',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			buble(),
			commonjs()
		]
	},
	{
		input: 'src/lib.js',
		// external: [],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
