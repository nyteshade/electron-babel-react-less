// install babel hooks in the main process
require('babel/register');
require('electron-compile').initWithOptions({
  compilerOpts: {
    js: {
      stage: 2
    }
  }
});
require('./main.js');
