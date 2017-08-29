import React from 'react';

import icon from '../../../../media/wifi.png';
import '../../../../css/components/DrilldownCards.css';


export default class CustomersFirstApplicationAccess extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            USCM 3rd Party Access Distribtuion for Applications
          </div>
        </div>
      </div>
    );
  }
}
