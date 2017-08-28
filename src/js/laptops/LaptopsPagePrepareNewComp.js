import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import LaptopsContent from './laptops-components/LaptopsContent';
import LaptopsHeader from './laptops-components/LaptopsHeader';
import LaptopsPrepareNewCompScript from '../laptops/laptops-components/laptops-scripts/LaptopsPrepareNewCompScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class LaptopsPagePrepareNewComp extends Component {
  render() {
    return (
      <div>

        <LaptopsHeader />
        <LaptopsContent />
        <div className='ScriptExit'>
          <Link to='../laptops'>X</Link>
        </div>
        <LaptopsPrepareNewCompScript />
        <Footer />
      </div>
    );
  }
}
