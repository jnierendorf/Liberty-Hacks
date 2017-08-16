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
      <div className="Cards">
        <SkypeChangeAddPic />
        <Link to='/skype/wontlaunch'><SkypeWontLaunch /></Link>
        <SkypeTroubleshooting />
      </div>
    );
  }
}
