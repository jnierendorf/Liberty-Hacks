import React from 'react';

import icon from '../../../../media/Hardware-Icon.png';
import '../../../../css/components/DrilldownCards.css';

export default class BuildingAccessWorkplaceServices extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Workplace Services
          </div>
        </div>
      </div>
    );
  }
}
