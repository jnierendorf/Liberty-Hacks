import React from 'react';

import PasswordCard from './cards/PasswordCard';
import RsaCard from './cards/RsaCard';
import OutlookCard from './cards/OutlookCard';
import PhoneCard from './cards/PhoneCard';
import LaptopsCard from './cards/LaptopsCard';
import SkypeCard from './cards/SkypeCard';
import BenefitsCard from './cards/BenefitsCard';
import BuildingAccessCard from './cards/BuildingAccessCard';
import CustomersFirstCard from './cards/CustomersFirstCard';
import NavigatorCard from './cards/NavigatorCard';


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
        <Link to='/laptops'><LaptopsCard /></Link>
        <Link to='/skype'><SkypeCard /></Link>
        {this.props.showNed ?
          <Link to='/benefits'><BenefitsCard/></Link>
          : <Link to='/customersfirst'><CustomersFirstCard/></Link>
        }
        {this.props.showNed ?
          <Link to='/buildingaccess'><BuildingAccessCard/></Link>
          : <Link to='navigator'><NavigatorCard/></Link>
        }
      </div>
    );
  }
}
