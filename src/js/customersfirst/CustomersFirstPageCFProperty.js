import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import CustomersFirstContent from './customersfirst-components/CustomersFirstContent';
import CustomersFirstHeader from './customersfirst-components/CustomersFirstHeader';
import CustomersFirstCFPropertyScript from './customersfirst-components/customersfirst-scripts/CustomersFirstCFPropertyScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class CustomersFirstPageCFProperty extends Component {
  render() {
    return (
      <div>

        <CustomersFirstHeader />
        <CustomersFirstContent />
        <div className='ScriptExit'>
          <Link to='../customersfirst'>X</Link>
        </div>
        <CustomersFirstCFPropertyScript />
        <Footer />
      </div>
    );
  }
}
