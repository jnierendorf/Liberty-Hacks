import React from 'react';

import icon from '../../../../media/BuildingAccess-Icon.png';
import '../../../../css/components/DrilldownCards.css';

export default class BuildingAccessRequestIT extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Access Request
          </div>
        </div>
      </div>
    );
  }
}
