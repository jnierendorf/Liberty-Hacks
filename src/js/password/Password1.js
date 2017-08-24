import React, { Component } from 'react';
import '../../css/App.css';

import PasswordContent from './password-components/PasswordContent';
import PasswordHeader from './password-components/PasswordHeader';
import Footer from '../components/Footer';

export default class Password1 extends Component {
  render() {
    return (
      <div>

        <PasswordHeader />
        <PasswordContent />
        <Footer />
      </div>
    );
  }
}
