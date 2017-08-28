import React, { Component } from 'react';
import '../../css/App.css';

import LaptopsContent from './laptops-components/LaptopsContent';
import LaptopsHeader from './laptops-components/LaptopsHeader';
import Footer from '../components/Footer';

export default class Laptops1 extends Component {
  render() {
    return (
      <div>

        <LaptopsHeader />
        <LaptopsContent />
        <Footer />
      </div>
    );
  }
}
