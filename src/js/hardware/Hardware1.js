import React, { Component } from 'react';
import '../../css/App.css';

import HardwareContent from './hardware-components/HardwareContent';
import HardwareHeader from './hardware-components/HardwareHeader';
import Footer from '../components/Footer';

export default class Hardware1 extends Component {
  render() {
    return (
      <div>

        <HardwareHeader />
        <HardwareContent />
        <Footer />
      </div>
    );
  }
}
