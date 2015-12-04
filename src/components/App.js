'use strict';

import React from 'react';
import { iphone } from 'bowser';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const baseAPI = 'https://api-v7-production.optonaut.co';

export default class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      previewAssetID: '',
      location: '',
    };
  }

  componentWillMount() {
    const alias = window.location.pathname.split('/')[1];
    fetch(`${baseAPI}/public/optographs/alias/${alias}`)
      .then(checkStatus)
      .then(response => response.json())
      .then(this._handleReponse.bind(this));
  }

  _handleReponse(json) {
    
    if (iphone) {
      window.location.replace(`optonaut://optographs/${json.id}`);
    }
    
    this.setState({
      previewAssetID: json.preview_asset_id,
      location: json.location.text + ', ' + json.location.country,
    });
  }

  render() {
    const size = Math.min(Math.min(window.innerWidth, window.innerHeight), 500) * 0.8;
    const previewURL = `url('http://optonaut-ios-beta-production.s3.amazonaws.com/original/${this.state.previewAssetID}.jpg')`
    return (
      <div id='content'>
        <h1>{this.state.location}</h1>
        <p>See in VR using the <a href='http://optonaut.co/'>Optonaut iOS App</a></p>
        <div style={{width: size, height: size, backgroundImage: previewURL }}>
          <a href='http://optonaut.co/' />
        </div>
      </div>
    );
  }
}
