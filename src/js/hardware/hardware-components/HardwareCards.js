import React from 'react';

import HardwarePrepareNewComp from './hardware-cards/HardwarePrepareNewComp';
import HardwareVDEVDP from './hardware-cards/HardwareVDEVDP';
import Buysmart from './hardware-cards/Buysmart';
import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class HardwareCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <Link to='/hardware/preparenewcomp'><HardwarePrepareNewComp /></Link>
        <a href="https://libertymutual-ss.rightanswers.com/portal/app/portlets/results/viewsolution.jsp?solutionid=151005105540188&SToken=20F998D7349E1C534B7695DA6E155ABF" target="_blank"><HardwareVDEVDP /></a>
        <Link to='/hardware/buysmart'><Buysmart /></Link>
      </div>
    );
  }
}
