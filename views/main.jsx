'use babel';

import React, {Component} from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className="message">
        Hello from
        <span className="styleme">React</span>
        with ES6 :)
        <p>
          <i>The loading delay is purely for visual fun</i>
        </p>
        <img src="imgs/electron.svg" width="300"/><br/>
        <img src="imgs/react.svg" width="150"/>
        <img src="imgs/babel.png" height="150"/>
      </div>
    );
  }
}
