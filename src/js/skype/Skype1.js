import React from 'react';
import '../../css/App.css';

import SkypeContent from './skype-components/SkypeContent';
import SkypeHeader from './skype-components/SkypeHeader';
import Footer from '../components/Footer';

export default class Skype1 extends React.Component {
  render() {
    return (
      <div>

        <SkypeHeader />
        <SkypeContent />
        <Footer />
      </div>
    );
  }
}
