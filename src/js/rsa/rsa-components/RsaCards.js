import React from 'react';

import RsaUnableToConnect from './rsa-cards/RsaUnableToConnect';
import RsaVPNConnect from './rsa-cards/RsaVPNConnect';
import RsaVPNTroubleshooting from './rsa-cards/RsaVPNTroubleshooting';
import RsaUnableToConnectScript from './rsa-scripts/RsaUnableToConnectScript';
import RsaVPNConnectScript from './rsa-scripts/RsaVPNConnectScript';
import RsaVPNTroubleshootingScript from './rsa-scripts/RsaVPNTroubleshootingScript';

import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class RsaCards extends React.Component {
  render() {
    return (
      <div className="DrilldownCards">
        <Link to ='/rsa/unabletoconnect'><RsaUnableToConnect /></Link>
        <Link to='/rsa/vpnconnect'><RsaVPNConnect /></Link>
        <Link to='/rsa/vpntroubleshooting'><RsaVPNTroubleshooting /></Link>
      </div>
    );
  }
}
