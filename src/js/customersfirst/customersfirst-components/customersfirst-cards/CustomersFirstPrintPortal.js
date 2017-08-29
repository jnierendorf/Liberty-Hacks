import React from 'react';

import icon from '../../../../media/lightbulb.png';
import '../../../../css/components/DrilldownCards.css';


export default class CustomersFirstPrintPortal extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Print Portal Helpful Hints
          </div>
        </div>
      </div>
    );
  }
}
