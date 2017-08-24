import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import SkypeContent from './skype-components/SkypeContent';
import SkypeHeader from './skype-components/SkypeHeader';
import SkypeChangeAddPicScript from './skype-components/skype-scripts/SkypeChangeAddPicScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class SkypePageChangeAddPic extends Component {
  render() {
    return (
      <div>

        <SkypeHeader />
        <SkypeContent />
        <div className='ScriptExit'>
          <Link to='../skype'>X</Link>
        </div>
        <SkypeChangeAddPicScript />
        <Footer />
      </div>
    );
  }
}
