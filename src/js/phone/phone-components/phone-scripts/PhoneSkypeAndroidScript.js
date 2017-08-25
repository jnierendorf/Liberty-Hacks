import React from 'react';

import '../../../../css/components/Scripts.css';

export default class PhoneSkypeAndroidScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Download and install the Skype for Business Mobile app on your device, through the Google Play Store.</li>
          <li>Open up the Skype for Business Mobile app, and tap the arrow to continue to configuration.</li>
          <li>Enter your Liberty Mutual e-mail address and enterprise ID password in the noted fields.</li>
          <li>Click "Advanced options", and enter your LM domain and ID in the Username field (e.g. LM\nxxxxxxx)</li>
          <li>Click the back arrow button to return to the sign-in screen then tap the blue sign-on arrow</li>
          <li>When prompted, enter your mobile phone number and tap the arrow to continue.</li>
        </ol>
      </div>
    );
  }
}
