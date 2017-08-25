import React from 'react';

import icon from '../../../../media/skype.png';
import '../../../../css/components/DrilldownCards.css';


export default class PhoneSkypeAndroid extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Android: Install and Configure Skype for Business Mobile
          </div>
        </div>
      </div>
    );
  }
}
