import React from 'react';

import icon from '../../../../media/trouble.png';
import '../../../../css/components/DrilldownCards.css';


export default class RsaVPNTroubleshooting extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Pulse Secure VPN Troubleshooting
          </div>
        </div>
      </div>
    );
  }
}
