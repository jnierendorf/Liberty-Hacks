import React from 'react';

import icon from '../../../../media/error.png';
import '../../../../css/components/DrilldownCards.css';


export default class NavigatorError extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            CVO Error while trying to open a claim
          </div>
        </div>
      </div>
    );
  }
}
