import React from 'react';
import icon from '../../../media/phone-icon.png';

export default class PhoneCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          Phone Support
        </div>
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon}></img>
          </div>
          <div className="CardContent">
            <ul>
              <li>Mobile app configuration</li>
              <li>BYOD request</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
