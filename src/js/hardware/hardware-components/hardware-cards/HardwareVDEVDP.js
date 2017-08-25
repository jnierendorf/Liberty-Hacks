import React from 'react';

import icon from '../../../../media/code.png';
import '../../../../css/components/DrilldownCards.css';

export default class HardwarePrepareNewComp extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            VDE & VDP Troubleshooting
          </div>
        </div>
      </div>
    );
  }
}