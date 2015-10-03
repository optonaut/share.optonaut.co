'use strict';

import React from 'react';
import { iphone } from 'bowser';

export default class App extends React.Component {
  constructor(props) {
    if (iphone) {
      const uuid = window.location.pathname.split('/')[1];
      window.location.replace(`optonaut://optographs/${uuid}`);
    }
    super(props);
  }

  render() {
    const size = Math.min(Math.min(window.innerWidth, window.innerHeight), 500) * 0.8;
    return (
      <div id='content'>
        <h1>Hackzürich 15</h1>
        <p>See in VR using the <a href='http://optonaut.co/'>Optonaut iOS App</a></p>
        <div style={{width: size, height: size}}>
          <a href='http://optonaut.co/' />
        </div>
      </div>
    );
  }
}
