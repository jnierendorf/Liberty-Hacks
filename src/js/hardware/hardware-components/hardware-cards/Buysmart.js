import React from 'react';

import icon from '../../../../media/buysmart.png';
import '../../../../css/components/DrilldownCards.css';

export default class Buysmart extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <br></br>
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            How to order a laptop on BuySmart
          </div>
        </div>
      </div>
    );
  }
}
