var copydir = require('copy-dir');
const del = require('del');
var fs = require('fs');

del.sync(['./angular**','./react']);
fs.mkdirSync('./angular');
fs.mkdirSync('./react');
copydir.sync( './node_modules/performance-angular/dist', './angular');
copydir.sync('./node_modules/performance-react/build', './react');