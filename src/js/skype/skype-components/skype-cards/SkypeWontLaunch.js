import React from 'react';

import icon from '../../../../media/skype.png';

export default class SkypeWontLaunch extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon}></img>
          </div>
          <div className="CardContent">
            <ul>
              <li>Skype doesn&#39;t launch when I turn on my computer.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
