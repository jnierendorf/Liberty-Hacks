import React from 'react';

import icon from '../../../../media/person1.png';

export default class SkypeChangeAddPic extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon}></img>
          </div>
          <div className="CardContent">
            <ul>
              <li>I want to change or add a profile picture to Skype</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
