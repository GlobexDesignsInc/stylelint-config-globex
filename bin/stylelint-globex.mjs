#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const binPath = path.join('node_modules', 'stylelint', 'bin', 'stylelint.mjs');

const fileExists = function (path) {
	let exists;
	try {
		fs.accessSync(path, fs.F_OK);
		exists = true;
	} catch (e) {
		exists = false;
	}
	return exists;
};

const findBin = function (search) {
	const searchPath = path.join(search, binPath);
	const exists = fileExists(searchPath);
	if (!exists) {
		const nextSearchPath = path.join(search, '..');
		if (nextSearchPath === '/') return null;
		return findBin(nextSearchPath);
	}
	return searchPath;
};

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const bin = findBin(__dirname);
if (!bin) throw new Error(`Unable to find stylelint executable. Did you run 'npm install'?`);

export default import(bin);
