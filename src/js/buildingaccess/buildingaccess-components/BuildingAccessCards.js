import React from 'react';

import BuildingAccessRequestIT from './buildingaccess-cards/BuildingAccessRequestIT';
import BuildingAccessWorkplaceServices from './buildingaccess-cards/BuildingAccessWorkplaceServices';
import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class BuildingAccessCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <a href='https://requestit.lmig.com/web/viewForm.do?form=3141' target='_blank'><BuildingAccessRequestIT /></a>
        <a href='https://myliberty.lmig.com/en-us/EmployeeCenter/WorkplaceServices/Pages/default.aspx' target='_blank'><BuildingAccessWorkplaceServices /></a>
      </div>
    );
  }
}
