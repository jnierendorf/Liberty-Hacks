import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import HardwareContent from './hardware-components/HardwareContent';
import HardwareHeader from './hardware-components/HardwareHeader';
import BuysmartScript from '../hardware/hardware-components/hardware-scripts/BuysmartScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class PageBuysmart extends Component {
  render() {
    return (
      <div>

        <HardwareHeader />
        <HardwareContent />
        <div className='ScriptExit'>
          <Link to='../hardware'>X</Link>
        </div>
        <BuysmartScript />
        <Footer />
      </div>
    );
  }
}
