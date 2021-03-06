import React from 'react';

import icon from '../../../media/backbutton.png';
import '../../../css/App.css';
import { Link } from 'react-router-dom';

export default class LaptopsHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">
          <h1>How can we help you with Laptops?</h1>
        </div>
        <div className="BackButton">
          <Link to='../'><img src={icon} height="55px"></img></Link>
        </div>
      </div>
    );
  }
}
