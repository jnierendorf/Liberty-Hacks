import React from 'react';
import icon from '../../../media/RSA-icon.png';

export default class RsaCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          RSA Token Help
        </div>
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon}></img>
          </div>
          <div className="CardContent">
            <ul>
              <li>Request or change your RSA token</li>
              <li>Request or change RSA pin</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
