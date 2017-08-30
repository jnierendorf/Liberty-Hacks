import React, { Component } from 'react';
import '../../css/App.css';

import NavigatorContent from './navigator-components/NavigatorContent';
import NavigatorHeader from './navigator-components/NavigatorHeader';
import Footer from '../components/Footer';

export default class Navigator1 extends Component {
  render() {
    return (
      <div>

        <NavigatorHeader />
        <NavigatorContent />
        <Footer />
      </div>
    );
  }
}
