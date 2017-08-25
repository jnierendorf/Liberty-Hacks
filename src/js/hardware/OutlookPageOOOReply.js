import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import OutlookContent from './outlook-components/OutlookContent';
import OutlookHeader from './outlook-components/OutlookHeader';
import OutlookOOOReplyScript from './outlook-components/outlook-scripts/OutlookOOOReplyScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class OutlookPageOOOReply extends Component {
  render() {
    return (
      <div>

        <OutlookHeader />
        <OutlookContent />
        <div className='ScriptExit'>
          <Link to='../outlook'>X</Link>
        </div>
        <OutlookOOOReplyScript />
        <Footer />
      </div>
    );
  }
}
