import React from 'react';

import LaptopsPrepareNewComp from './laptops-cards/LaptopsPrepareNewComp';
import LaptopsVDEVDP from './laptops-cards/LaptopsVDEVDP';
import Buysmart from './laptops-cards/Buysmart';
import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class LaptopsCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <Link to='/laptops/preparenewcomp'><LaptopsPrepareNewComp /></Link>
        <a href="https://libertymutual-ss.rightanswers.com/portal/app/portlets/results/viewsolution.jsp?solutionid=151005105540188&SToken=20F998D7349E1C534B7695DA6E155ABF" target="_blank"><LaptopsVDEVDP /></a>
        <Link to='/laptops/buysmart'><Buysmart /></Link>
      </div>
    );
  }
}
