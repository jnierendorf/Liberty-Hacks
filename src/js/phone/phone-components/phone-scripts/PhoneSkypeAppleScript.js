import React from 'react';

import '../../../../css/components/Scripts.css';

export default class PhoneSkypeAppleScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Download and install the Skype for Business Mobile app on your device, through the App Store.</li>
          <li>Enter your Liberty Mutual e-mail address and click on Show Advanced Options</li>
          <li>In the User name field, enter your LM Domain and ID (e.g. LM\Nxxxxxxx), then touch the X to return to sign-on.</li>
          <li>If prompted for a password, enter your Enterprise password and click "Sign In".</li>
          <li>When prompted, enter your mobile phone number with country code, and tap the arrow to continue.</li>
          <li>On the Manage Data Use screen, choose options baesd on your preferences.</li>
          <li>If the Sign in option is greyed out, ensure Auto-Detect Server is enabled.</li>
        </ol>
      </div>
    );
  }
}
