import React from 'react';

import { Link } from 'react-router-dom';

import icon from '../../../media/BuildingAccess-Icon.png';

export default class BuildingAccessCard extends React.Component {
  render() {
    return (

      <div className="Card">

        <div className="CardTitle">
          Building Access
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
