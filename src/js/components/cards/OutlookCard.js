import React from 'react';
import icon from '../../../media/Outlook-Icon.png';

export default class OutlookCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="CardTitle">
          Microsoft Outlook
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
