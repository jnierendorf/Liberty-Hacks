import React from 'react';

import '../../../../css/components/Scripts.css';

export default class PasswordChangePasswordScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>If the Skype for Business icon is in the system tray/notification area, right-click it and left-click Exit. </li>
          <li>If Skype for Business still does not start, close Outlook and Skype for Business.</li>
          <li>End all instances of Outlook.exe, Lync.exe, lynchtmlconv.exe, and UcMapi.exe.</li>
          <li>Run Skype for Business by going to Start > All Programs > Microsoft Office 2013 >Skype for Business.</li>
          <li>If Skype for Business still does not run, reboot computer and try steps again.</li>
          <li>If still unresolved, contact the IT Help Desk. password</li>
        </ol>
      </div>
    );
  }
}
