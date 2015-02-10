#! /usr/bin/env node
'use strict';

var path = require('path');
var _ = require('lodash');
var child_process = require('child_process');
var util = require('util');

var scratchDir = 'current-app';

function log (msg) {
	console.log(msg);
}

function exec () {
	var cmd = util.format.apply(null, arguments);
	return child_process.execSync(cmd);
}

// load the json file specified
var filename = path.resolve(process.argv.slice(2)[0]);
var repos = require(filename);

var person = _.shuffle(_.keys(repos))[0];
var repo = repos[person];

log('selected ' + person);
if (repo) {
	exec('rm -rf %s', scratchDir);
	exec('git clone %s %s', repo, scratchDir);
	exec('%s %s', process.env.EDITOR, scratchDir);
	child_process.spawn('meteor', {cwd: scratchDir, stdio: 'inherit'});
	exec('open http://localhost:3000');
} else {
	log('no repository specified!');
}



