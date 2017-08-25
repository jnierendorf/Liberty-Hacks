import React, { Component } from 'react';
import '../../css/App.css';

import PhoneContent from './phone-components/PhoneContent';
import PhoneHeader from './phone-components/PhoneHeader';
import Footer from '../components/Footer';

export default class Phone1 extends Component {
  render() {
    return (
      <div>

        <PhoneHeader />
        <PhoneContent />
        <Footer />
      </div>
    );
  }
}
