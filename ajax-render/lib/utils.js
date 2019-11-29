var fs = require('fs');

let myFileLoad = function (filePath) {
  return fs.readFileSync(filePath);
};

exports.myFileLoad = myFileLoad;
