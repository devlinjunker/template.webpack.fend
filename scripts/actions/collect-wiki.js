
const path = require('path');
const fs = require('fs');
const esdocSettings = require('../../.esdoc.json');

const TMP_DIR = 'wiki';


const tmpPath = path.join(__dirname, '../..', TMP_DIR);
if (!fs.existsSync(tmpPath)) {
  fs.mkdirSync(tmpPath);
}

const map = {};
const readmeFiles = esdocSettings['plugins'][0]['option']['manual']['files'];
for (const i in readmeFiles) {
  const fullPath = `../.${  readmeFiles[i]}`;
  const name = path.parse(fullPath).base;

  const newName = `${i  }-${  name.substr(7, name.length - 3)}`;

  map[name] = newName;
  fs.copyFileSync(path.resolve(__dirname, fullPath), path.join(tmpPath, newName));
}

// Attempt copy index file to "home.md" in wiki
const home = esdocSettings['plugins'][0]['option']['manual']['index'];
const homePath = `../.${home}`;
let content = fs.readFileSync(path.resolve(__dirname, homePath)).toString();

// Replace all links in index.md file so they work on github
for (const oldName in map) {
  // find (manual/README.controllers.html)
  // become: newName without `.md` (e.g. "0-setup")
  // oldName ex: "README.setup.md";
  const newName = map[oldName];
  const namePart = oldName.substring(0, oldName.length - 3);

  const regexp = new RegExp(`\\(manual\\/${namePart}\\.html\\)`);

  const newLink = newName.substring(0, newName.length - 3);
  content = content.replace(regexp, `(${newLink})`);
}

fs.writeFileSync(path.join(tmpPath, 'Home.md'), content);
