import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import PasswordContent from './password-components/PasswordContent';
import PasswordHeader from './password-components/PasswordHeader';
import PasswordChangePasswordScript from './password-components/password-scripts/PasswordChangePasswordScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class PasswordChangePassword extends Component {
  render() {
    return (
      <div>

        <PasswordHeader />
        <PasswordContent />
        <div className='ScriptExit'>
          <Link to='../password'>X</Link>
        </div>
        <PasswordChangePasswordScript />
        <Footer />
      </div>
    );
  }
}
