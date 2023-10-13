const fs = require('fs');

console.log('process.argv', process.argv)
const bootJson = process.argv[1];

const boot = JSON.parse(fs.readFileSync(bootJson, 'utf8'));
const version = process.argv[2];

boot.version = version;

fs.writeFileSync(bootJson, JSON.stringify(boot, null, 2), 'utf8');
