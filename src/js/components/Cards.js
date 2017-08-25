import React from 'react';

import PasswordCard from './cards/PasswordCard';
import RsaCard from './cards/RsaCard';
import OutlookCard from './cards/OutlookCard';
import PhoneCard from './cards/PhoneCard';
import HardwareCard from './cards/HardwareCard';
import SkypeCard from './cards/SkypeCard';
import BenefitsCard from './cards/BenefitsCard';
import BuildingAccessCard from './cards/BuildingAccessCard';


import '../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class Cards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <Link to='/password'><PasswordCard /></Link>
        <Link to='/rsa'><RsaCard /></Link>
        <Link to='/outlook'><OutlookCard /></Link>
        <Link to='/phone'><PhoneCard /></Link>
        <HardwareCard />
        <Link to='/skype'><SkypeCard /></Link>
        <BenefitsCard/>
        <BuildingAccessCard/>
      </div>
    );
  }
}
