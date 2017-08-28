import React from 'react';
import icon from '../../../media/RSA-icon.png';

export default class RsaCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          RSA Tokens & VPN
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
