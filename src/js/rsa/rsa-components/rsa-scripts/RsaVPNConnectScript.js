import React from 'react';

import '../../../../css/components/Scripts.css';

export default class RsaVPNConnectScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Connect to the internet. You can verify this by going to any website.</li>
          <li>Launch the Pulse Secure application.</li>
          <li>Click Connect, and then enter your Enterprise ID (N number) and Password. Click Connect.</li>
          <li>Launch the RSA SecurID application and enter your 6-8 digit cutom RSA PIN.</li>
          <li>Copy the Passcode and paste it into the secondary token information field in Pulse Secure.</li>
        </ol>
      </div>
    );
  }
}
