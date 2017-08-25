import React from 'react';

import HardwarePrepareNewComp from './hardware-cards/HardwarePrepareNewComp';
import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class HardwareCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <Link to='/hardware/preparenewcomp'><HardwarePrepareNewComp /></Link>
      </div>
    );
  }
}
