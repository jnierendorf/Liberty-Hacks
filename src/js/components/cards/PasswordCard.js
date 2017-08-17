import React from 'react';

import icon from '../../../media/Password-Icon.png';

export default class PasswordCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          Password Support
        </div>
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon}></img>
          </div>
        </div>
      </div>
    );
  }
}
