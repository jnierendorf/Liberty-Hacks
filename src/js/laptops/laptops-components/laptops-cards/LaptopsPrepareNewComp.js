import React from 'react';

import icon from '../../../../media/Laptops-Icon.png';
import '../../../../css/components/DrilldownCards.css';

export default class LaptopsPrepareNewComp extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Prepare your new or reimaged computer for the first time
          </div>
        </div>
      </div>
    );
  }
}
