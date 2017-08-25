import React from 'react';

import '../../../../css/components/Scripts.css';

export default class PhoneSecureScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Open the MobileIron Mobile@Work app, and go to settings.</li>
          <li>Select Secure Apps Manager, and then press Passcode.</li>
          <li>Select Change Passcode, and then press Forgot Passcode.</li>
          <li>Enter your Libery Mutual N number and enterprise password, then press Go.</li>
          <li>Enter a new passcode and press OK, then confirm your password and press OK again.</li>
          <li>Once your new passcode has been created, press done.</li>
        </ol>
      </div>
    );
  }
}
