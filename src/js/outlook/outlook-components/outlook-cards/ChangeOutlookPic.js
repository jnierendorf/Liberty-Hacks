import React from 'react';

import icon from '../../../../media/person1.png';
import '../../../../css/components/DrilldownCards.css';

export default class ChangeOutlookPic extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            Change my Outlook picture
          </div>
        </div>
      </div>
    );
  }
}
