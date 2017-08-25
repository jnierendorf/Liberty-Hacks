import React, { Component } from 'react';
import '../../css/App.css';

import BuildingAccessContent from './buildingaccess-components/BuildingAccessContent';
import BuildingAccessHeader from './buildingaccess-components/BuildingAccessHeader';
import Footer from '../components/Footer';

export default class BuildingAccess1 extends Component {
  render() {
    return (
      <div>

        <BuildingAccessHeader />
        <BuildingAccessContent />
        <Footer />
      </div>
    );
  }
}
