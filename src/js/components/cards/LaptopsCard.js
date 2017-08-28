import React from 'react';
import icon from '../../../media/Laptops-Icon.png';

export default class LaptopsCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          Laptops
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
