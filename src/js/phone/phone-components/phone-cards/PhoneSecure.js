import React from 'react';

import icon from '../../../../media/Password-Icon.png';
import '../../../../css/components/DrilldownCards.css';


export default class PhoneSecure extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Apple iOS: Forgot Secure Apps Passcode
          </div>
        </div>
      </div>
    );
  }
}
