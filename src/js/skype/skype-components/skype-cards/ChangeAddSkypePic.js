import React from 'react';

import icon from '../../../media/person.png';

export default class ChangeAddSkypePic extends React.Component {
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
