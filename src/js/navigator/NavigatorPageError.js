import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import NavigatorContent from './navigator-components/NavigatorContent';
import NavigatorHeader from './navigator-components/NavigatorHeader';
import NavigatorErrorScript from './navigator-components/navigator-scripts/NavigatorErrorScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class NavigatorPageError extends Component {
  render() {
    return (
      <div>

        <NavigatorHeader />
        <NavigatorContent />
        <div className='ScriptExit'>
          <Link to='../navigator'>X</Link>
        </div>
        <NavigatorErrorScript />
        <Footer />
      </div>
    );
  }
}
