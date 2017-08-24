import React from 'react';

import icon from '../../../../media/wifi.png';
import '../../../../css/components/DrilldownCards.css';


export default class RsaUnableToConnect extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Unable to connect from a hotel or public Wifi
          </div>
        </div>
      </div>
    );
  }
}
