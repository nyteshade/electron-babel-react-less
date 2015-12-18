'use babel';

import app from 'app';
import BrowserWindow from 'browser-window';
import Q from 'q';

let mainWindow = null;

// Example of using async/await
function getAge() {
  let defer = Q.defer();
  setTimeout(()=>defer.resolve(21), 3000);
  return defer.promise;
}

async function t() {
  let age = await getAge();
  console.log('inside t, age is %d', age);
}

t();
// End example of using async/await

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
