import React, { Component } from 'react';
import '../../css/App.css';

import CustomersFirstContent from './customersfirst-components/CustomersFirstContent';
import CustomersFirstHeader from './customersfirst-components/CustomersFirstHeader';
import Footer from '../components/Footer';

export default class CustomersFirst1 extends Component {
  render() {
    return (
      <div>

        <CustomersFirstHeader />
        <CustomersFirstContent />
        <Footer />
      </div>
    );
  }
}
