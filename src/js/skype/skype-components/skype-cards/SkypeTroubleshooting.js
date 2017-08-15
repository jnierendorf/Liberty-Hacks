import React from 'react';

import icon from '../../../../media/trouble.png';

export default class SkypeTroubleshooting extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon}></img>
          </div>
          <div className="CardContent">
            <ul>
              <li>Troubleshooting</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
