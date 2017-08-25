import React from 'react';

import '../../../../css/components/Scripts.css';

export default class HardwarePrepareNewCompScript extends React.Component {
  render() {
    return (
      <div className="Script">
      <b></b>
        <ol>
          <li>Before powering on the device: plug the power cable, Ethernet connection and USB Gold Disk directly into the laptop. Do not use the docking station.</li>

<li>In order to boot from the USB Gold Disk:
When powering on the device, press F12 to enter an alternate boot method.
Select USB HDD: “Name” (Name will vary depending on brand of USB device being used.) </li>

<li>
Click the Next button and continue with the device imaging questionnaire.</li>

<li>Within the questionnaire, when presented with “Select a task sequence to run” choose:
Name: 64 bit Windows 7 Production Image</li>

<li>Once completed, you may begin installing any needed applications using the steps in this solution.</li>
        </ol>
      </div>
    );
  }
}
