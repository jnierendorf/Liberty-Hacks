import React from 'react';
import icon from '../../../media/Hardware-Icon.png';

export default class HardwareCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          Hardware
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
