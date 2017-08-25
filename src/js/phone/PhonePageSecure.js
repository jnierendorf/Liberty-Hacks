import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import PhoneContent from './phone-components/PhoneContent';
import PhoneHeader from './phone-components/PhoneHeader';
import PhoneSecureScript from './phone-components/phone-scripts/PhoneSecureScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class PhonePageSecure extends Component {
  render() {
    return (
      <div>

        <PhoneHeader />
        <PhoneContent />
        <div className='ScriptExit'>
          <Link to='../phone'>X</Link>
        </div>
        <PhoneSecureScript />
        <Footer />
      </div>
    );
  }
}
