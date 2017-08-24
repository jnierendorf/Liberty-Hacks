import React from 'react';

import '../../../../css/components/Scripts.css';

export default class RsaVPNTroubleshootingScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Restart your computer and try again.</li>
          <li>Try installing/reinstalling Pulse Secure, and then restart your computer.</li>
          <li>If problems persist, please contact the IT Help Desk for assisstance.</li>
        </ol>
      </div>
    );
  }
}
