import React from 'react';

import '../../../../css/components/Scripts.css';

export default class PasswordChangePasswordScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>Visit myPassword by typing mypassword/ into your browser.</li>
          <li>Click the button titled "Reset / Change Password".</li>
          <li>Enter your N number and Enterprise Password.</li>
          <li>Enter and submit a new password, following the provided requirements.</li>
        </ol>
      </div>
    );
  }
}
