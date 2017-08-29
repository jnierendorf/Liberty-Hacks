import React from 'react';
import icon from '../../../media/phone-icon.png';

export default class CustomersFirstCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          CustomersFirst
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
