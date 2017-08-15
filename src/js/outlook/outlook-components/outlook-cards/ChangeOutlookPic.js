import React from 'react';

import icon from '../../../../media/person1.png';

export default class ChangeOutlookPic extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon}></img>
          </div>
          <div className="CardContent">
            <ul>
              <li>I want to change my Outlook picture.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
