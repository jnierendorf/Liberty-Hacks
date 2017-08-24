import React from 'react';

import icon from '../../../../media/security-questions.png';
import '../../../../css/components/DrilldownCards.css';


export default class PasswordChangePreferences extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Change your Security Questions and Contact Preferences
          </div>
        </div>
      </div>
    );
  }
}
