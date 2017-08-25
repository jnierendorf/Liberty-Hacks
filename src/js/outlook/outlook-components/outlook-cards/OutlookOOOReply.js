import React from 'react';

import icon from '../../../../media/Outlook-Icon.png';
import '../../../../css/components/DrilldownCards.css';

export default class OutlookOOOReply extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Turn on/off "Out of Office" Reply
          </div>
        </div>
      </div>
    );
  }
}
