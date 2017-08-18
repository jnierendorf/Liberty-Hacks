import React from 'react';
import icon from '../../../media/phone-icon.png';

export default class PhoneCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          Phone
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
