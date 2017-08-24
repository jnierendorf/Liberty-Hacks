import React from 'react';

import icon from '../../../../media/person1.png';
import '../../../../css/components/DrilldownCards.css';


export default class PasswordMyPassword extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
              Access MyPassword
          </div>
        </div>
      </div>
    );
  }
}
