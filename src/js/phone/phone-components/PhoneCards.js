import React from 'react';

import PhoneSecure from './phone-cards/PhoneSecure';
import PhoneSkypeApple from './phone-cards/PhoneSkypeApple';
import PhoneSkypeAndroid from './phone-cards/PhoneSkypeAndroid';
import PhoneSecureScript from './phone-scripts/PhoneSecureScript';
import PhoneSkypeAppleScript from './phone-scripts/PhoneSkypeAppleScript';
import PhoneSkypeAndroidScript from './phone-scripts/PhoneSkypeAndroidScript';

import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';

export default class PhoneCards extends React.Component {
  render() {
    return (
      <div className="DrilldownCards">
        <Link to ='/phone/secure'><PhoneSecure /></Link>
        <Link to='/phone/skypeapple'><PhoneSkypeApple /></Link>
        <Link to='/phone/skypeandroid'><PhoneSkypeAndroid /></Link>
      </div>
    );
  }
}
