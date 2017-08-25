import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import PhoneContent from './phone-components/PhoneContent';
import PhoneHeader from './phone-components/PhoneHeader';
import PhoneSkypeAppleScript from './phone-components/phone-scripts/PhoneSkypeAppleScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class PhonePageSkypeApple extends Component {
  render() {
    return (
      <div>

        <PhoneHeader />
        <PhoneContent />
        <div className='ScriptExit'>
          <Link to='../rsa'>X</Link>
        </div>
        <PhoneSkypeAppleScript />
        <Footer />
      </div>
    );
  }
}
