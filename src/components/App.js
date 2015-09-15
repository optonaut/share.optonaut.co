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
    return (
      <h1>Optonaut</h1>
    );
  }
}
