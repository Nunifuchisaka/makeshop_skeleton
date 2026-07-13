const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');

const entryFiles = pattern => glob.sync(pattern, {
  cwd: SRC_DIR,
  ignore: '**/_*',
  nodir: true,
});

const expectedFiles = [
  ...entryFiles('**/*.ejs').flatMap(file => [
    path.join('dist', file.replace(/\.ejs$/, '.html')),
    path.join('dist_uncompressed', file.replace(/\.ejs$/, '.html')),
  ]),
  ...entryFiles('**/*.js').flatMap(file => [
    path.join('dist', file),
    path.join('dist_uncompressed', file),
  ]),
  ...entryFiles('**/*.scss').flatMap(file => [
    path.join('dist', file.replace(/\.scss$/, '.css')),
    path.join('dist_uncompressed', file.replace(/\.scss$/, '.css')),
  ]),
];

const missingFiles = expectedFiles.filter(file => !fs.existsSync(path.join(ROOT_DIR, file)));

if (missingFiles.length > 0) {
  console.error('Missing build artifacts:');
  missingFiles.forEach(file => console.error(`- ${file}`));
  process.exitCode = 1;
} else {
  console.log(`Verified ${expectedFiles.length} build artifacts.`);
}
