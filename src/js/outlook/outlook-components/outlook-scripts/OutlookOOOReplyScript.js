import React from 'react';

import '../../../../css/components/Scripts.css';

export default class OutlookOOOReplyScript extends React.Component {
  render() {
    return (
      <div className="Script">
      <b>If you would like to turn Out of Office reply ON:</b>
        <ol>
            <li>Within Outlook go to the File ribbon.</li>
            <li>Click the icon for Automatic Replies (Out of Office).</li>
            <li>Do you want to turn the "Out of Office" button on</li>
              <ol type="A">
                <li>Check the radio button "Send Automatic Replies."</li>
                <li>To set for a specific time range select the Radio button for Only Send during this Time Range and choose the dates and times the Out of Office will be on for.</li>
                <li>Customize the Out of Office message and click OK.</li>
                <li>If you received a prompt stating "You changed your auto-reply..", then you should be all set. Otherwise, continue onto the next step:</li>
                <li>Indicate whether you want to change the message for recipients outside Liberty Mutual (Yes or No).</li>
                <li>Click OK.</li>
              </ol>
              </ol>
              <b>If you would like to turn Out of Office reply OFF:</b>
              <ol>
              <li>While your Out of Office message is on you will see a prompt on the Home ribbon asking if you want to turn off the Out of Office message.  Click Turn off.</li>
              <li>Alternatively, you can go to the File tab and click Turn off next to the Automatic Replies icon. Done.</li>
              <li>
              If you are still unable to turn off the Out Of Office, please do the following:
              Go to File, and click on the Automatic Replies box (do not just click on the Turn Off / On option on the Account Information page)
              Make sure that the Send Automatic Replies radio button is selected, click OK
              Completely exit Outlook and Skype (in Skype, click on File / Options / Exit)
              Re-launch Oulook, go to File and go click on the Automatic Replies box (do not just click on the Turn Off / On option on the Account Information page).
              Select the Do Not Send Automatic Replies radio button, click OK.
              </li>
        </ol>
      </div>
    );
  }
}
