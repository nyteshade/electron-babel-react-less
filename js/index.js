'use babel';

import ReactDOM from 'react-dom';
import React from 'react';
import Main from './views/main.jsx';

let target = document.body.querySelector('body > main');

setTimeout(() => {
  ReactDOM.render(<Main/>, target);
}, 3500);
