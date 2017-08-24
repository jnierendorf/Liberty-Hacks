import React from 'react';

import SkypeChangeAddPic from './skype-cards/SkypeChangeAddPic';
import SkypeWontLaunch from './skype-cards/SkypeWontLaunch';
import SkypeTroubleshooting from './skype-cards/SkypeTroubleshooting';
import SkypeWontLaunchScript from './skype-scripts/SkypeWontLaunchScript';

import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class SkypeCards extends React.Component {
  render() {
    return (
      <div className="DrilldownCards">
        <Link to='/skype/changeaddpic'><SkypeChangeAddPic /></Link>
        <Link to='/skype/wontlaunch'><SkypeWontLaunch /></Link>
        <a href="https://libertymutual-ss.rightanswers.com/portal/app/portlets/results/viewsolution.jsp?solutionid=151005105540188&SToken=20F998D7349E1C534B7695DA6E155ABF" target="_blank"><SkypeTroubleshooting /></a>
      </div>
    );
  }
}
