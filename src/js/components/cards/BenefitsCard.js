import React from 'react';

import { Link } from 'react-router-dom';

import icon from '../../../media/Benefits-Icon.png';

export default class BenefitsCard extends React.Component {
  render() {
    return (

      <div className="Card">

        <div className="CardTitle">
          Benefits Support
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
