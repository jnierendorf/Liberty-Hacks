import React from 'react';

import icon from '../../../../media/money.png';
import '../../../../css/components/DrilldownCards.css';


export default class CustomersFirstCFProperty extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            CF Property: Rates / Premium Concerns
          </div>
        </div>
      </div>
    );
  }
}
