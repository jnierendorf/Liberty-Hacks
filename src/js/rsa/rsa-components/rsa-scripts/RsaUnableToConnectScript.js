import React from 'react';

import '../../../../css/components/Scripts.css';

export default class RsaUnableToConnectScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Most Hotels / Public Wifi spots have a custom login screen. If this appeared for you, go to step 4.</li>
          <li>Launch Internet Explorer and go to <a href="https://google.com">any website</a>. If this still doesn't bring up the page, go to the hotel's website.</li>
          <li>If still unable to see the welcome page, temporarily disable your Internet Proxy Settings.</li>
          <li>Complete the location's login process.</li>
          <li>Close Internet Explorer and login to Liberty VPN.</li>
        </ol>
      </div>
    );
  }
}
