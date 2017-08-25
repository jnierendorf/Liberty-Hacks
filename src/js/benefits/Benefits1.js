import React, { Component } from 'react';
import '../../css/App.css';

import BenefitsContent from './benefits-components/BenefitsContent';
import BenefitsHeader from './benefits-components/BenefitsHeader';
import Footer from '../components/Footer';

export default class Benefits1 extends Component {
  render() {
    return (
      <div>

        <BenefitsHeader />
        <BenefitsContent />
        <Footer />
      </div>
    );
  }
}
