import React from 'react';

import { Link } from 'react-router-dom';

import icon from '../../../media/skype.png';

export default class SkypeCard extends React.Component {
  render() {
    return (

      <div className="Card">

        <div className="CardTitle">
          Skype/Lync Help
        </div>
        <div className="CardContainer">
          <div className="CardIcon">
            <img src={icon} height="100%" width="100%"></img>
          </div>
          <div className="CardContent">

            <ul>

              <li>Audio</li>
              <li>Video</li>
              <li>Instant-message</li>
            </ul>
          </div>
          </div>
        </div>


    );
  }
}
