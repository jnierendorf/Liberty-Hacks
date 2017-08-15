import React, { Component } from 'react';
import '../../css/App.css';

import OutlookContent from './outlook-components/OutlookContent';
import OutlookHeader from './outlook-components/OutlookHeader';
import Footer from '../components/Footer';

export default class Outlook1 extends Component {
  render() {
    return (
      <div>

        <OutlookHeader />
        <OutlookContent />
        <Footer />
      </div>
    );
  }
}
