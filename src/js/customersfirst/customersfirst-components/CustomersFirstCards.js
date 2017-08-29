import React from 'react';

import CustomersFirstApplicationAccess from './customersfirst-cards/CustomersFirstApplicationAccess';
import CustomersFirstCFProperty from './customersfirst-cards/CustomersFirstCFProperty';
import CustomersFirstPrintPortal from './customersfirst-cards/CustomersFirstPrintPortal';
import CustomersFirstApplicationAccessScript from './customersfirst-scripts/CustomersFirstApplicationAccessScript';
import CustomersFirstCFPropertyScript from './customersfirst-scripts/CustomersFirstCFPropertyScript';
import CustomersFirstPrintPortalScript from './customersfirst-scripts/CustomersFirstPrintPortalScript';

import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class CustomersFirstCards extends React.Component {
  render() {
    return (
      <div className="DrilldownCards">
        <Link to ='/customersfirst/applicationaccess'><CustomersFirstApplicationAccess /></Link>
        <Link to='/customersfirst/cfproperty'><CustomersFirstCFProperty /></Link>
        <Link to='/customersfirst/printportal'><CustomersFirstPrintPortal /></Link>
      </div>
    );
  }
}
