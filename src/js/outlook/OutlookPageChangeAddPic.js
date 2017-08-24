import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import OutlookContent from './outlook-components/OutlookContent';
import OutlookHeader from './outlook-components/OutlookHeader';
import SkypeChangeAddPicScript from '../skype/skype-components/skype-scripts/SkypeChangeAddPicScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class OutlookPageChangeAddPic extends Component {
  render() {
    return (
      <div>

        <OutlookHeader />
        <OutlookContent />
        <div className='ScriptExit'>
          <Link to='../outlook'>X</Link>
        </div>
        <SkypeChangeAddPicScript />
        <Footer />
      </div>
    );
  }
}
