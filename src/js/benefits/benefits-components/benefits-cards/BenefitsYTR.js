import React from 'react';

import icon from '../../../../media/Hardware-Icon.png';
import '../../../../css/components/DrilldownCards.css';

export default class BenefitsYTR extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Access Your Total Rewards
          </div>
        </div>
      </div>
    );
  }
}
