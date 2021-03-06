import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import RsaContent from './rsa-components/RsaContent';
import RsaHeader from './rsa-components/RsaHeader';
import RsaUnableToConnectScript from './rsa-components/rsa-scripts/RsaUnableToConnectScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class RsaPageUnableToConnect extends Component {
  render() {
    return (
      <div>

        <RsaHeader />
        <RsaContent />
        <div className='ScriptExit'>
          <Link to='../rsa'>X</Link>
        </div>
        <RsaUnableToConnectScript />
        <Footer />
      </div>
    );
  }
}
