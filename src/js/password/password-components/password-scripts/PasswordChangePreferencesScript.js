import React from 'react';

import '../../../../css/components/Scripts.css';

export default class PasswordChangePreferencesScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Visit myPassword by typing mypassword/ into your browser.</li>
          <li>Click the button titled "Update Contact Preferences".</li>
          <li>Enter your N number and Enterprise Password.</li>
          <li>Enter and save new contact information and security questions.</li>
        </ol>
      </div>
    );
  }
}
