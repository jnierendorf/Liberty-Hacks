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
            <img src={icon}></img>
          </div>
          </div>
        </div>


    );
  }
}
