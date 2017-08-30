import React from 'react';

import NavigatorError from './navigator-cards/NavigatorError';
import NavigatorOpening from './navigator-cards/NavigatorOpening';
import NavigatorUpgrades from './navigator-cards/NavigatorUpgrades';
import NavigatorErrorScript from './navigator-scripts/NavigatorErrorScript';
import NavigatorOpeningScript from './navigator-scripts/NavigatorOpeningScript';
import NavigatorUpgradesScript from './navigator-scripts/NavigatorUpgradesScript';

import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class NavigatorCards extends React.Component {
  render() {
    return (
      <div className="DrilldownCards">
        <Link to ='/navigator/error'><NavigatorError /></Link>
        <Link to='/navigator/opening'><NavigatorOpening /></Link>
        <Link to='/navigator/upgrades'><NavigatorUpgrades /></Link>
      </div>
    );
  }
}
