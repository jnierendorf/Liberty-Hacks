import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import SkypeContent from './skype-components/SkypeContent';
import SkypeHeader from './skype-components/SkypeHeader';
import SkypeWontLaunchScript from './skype-components/skype-scripts/SkypeWontLaunchScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class SkypePageWontLaunch extends Component {
  render() {
    return (
      <div>

        <SkypeHeader />
        <SkypeContent />
        <div className='ScriptExit'>
          <Link to='../skype'>x</Link>
        </div>
        <SkypeWontLaunchScript />
        <Footer />
      </div>
    );
  }
}
