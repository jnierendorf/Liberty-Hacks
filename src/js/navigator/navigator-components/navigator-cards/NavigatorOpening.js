import React from 'react';

import icon from '../../../../media/requestit.png';
import '../../../../css/components/DrilldownCards.css';


export default class NavigatorOpening extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            ISO reports are not opening correctly
          </div>
        </div>
      </div>
    );
  }
}
