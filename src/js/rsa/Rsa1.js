import React, { Component } from 'react';
import '../../css/App.css';

import RsaContent from './rsa-components/RsaContent';
import RsaHeader from './rsa-components/RsaHeader';
import Footer from '../components/Footer';

export default class Rsa1 extends Component {
  render() {
    return (
      <div>

        <RsaHeader />
        <RsaContent />
        <Footer />
      </div>
    );
  }
}
