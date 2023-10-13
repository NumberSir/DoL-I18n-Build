
var fs = require('fs');

console.log('process.argv', process.argv)
var bootJson = process.argv[2];

var boot = JSON.parse(fs.readFileSync(bootJson, 'utf8'));
var version = process.argv[3];

boot.version = version;

fs.writeFileSync(bootJson, JSON.stringify(boot, null, 2), 'utf8');
