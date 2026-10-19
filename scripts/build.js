const fs = require('node:fs');
const path = require('node:path');

const projectDir = path.join(__dirname, '..');
const source = path.join(projectDir, 'index.html');
const outputDir = path.join(projectDir, 'dist');
const output = path.join(outputDir, 'index.html');

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(source, output);

console.log('Build completed: dist/index.html');
