import fs from 'fs';
function readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) reject(err);
        else resolve(JSON.parse(data));
      });
    });
  }
  
  function writeFile(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
export  { readFile, writeFile };
