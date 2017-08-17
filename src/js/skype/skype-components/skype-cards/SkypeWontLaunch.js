import React from 'react';

import icon from '../../../../media/skype.png';
import '../../../../css/components/DrilldownCards.css';


export default class SkypeWontLaunch extends React.Component {
  render() {
    return (
      <div className="DrilldownCard">
        <div className="DrilldownCardContainer">
          <div className="DrilldownCardIcon">
            <img src={icon}></img>
          </div>
          <div className="DrilldownCardContent">
            <ul>
              <li>Skype doesn&#39;t launch when I turn on my computer.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
