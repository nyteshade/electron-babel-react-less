// install babel hooks in the main process
require('babel/register')({
  'optional': ['es7.asyncFunctions']
});
require('electron-compile').initWithOptions({
  compilerOpts: {
    js: {
      stage: 0
    }
  }
});
require('./main.js');
