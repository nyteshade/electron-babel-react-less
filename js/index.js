'use babel';

import ReactDOM from 'react-dom';
import React from 'react';
import Main from './views/main.jsx';
import * as SampleLib from './js/sample-lib';

let target = document.body.querySelector('body > main');
let libVal = SampleLib.default('Brie');
let libVal2 = SampleLib.doSomethingElse('Brie');

setTimeout(() => {
  ReactDOM.render(<Main/>, target);
}, 3500);
