import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/components/Scripts.css';

import PasswordContent from './password-components/PasswordContent';
import PasswordHeader from './password-components/PasswordHeader';
import PasswordChangePreferencesScript from './password-components/password-scripts/PasswordChangePreferencesScript';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

export default class PasswordPageChangePreferences extends Component {
  render() {
    return (
      <div>

        <PasswordHeader />
        <PasswordContent />
        <div className='ScriptExit'>
          <Link to='../password'>X</Link>
        </div>
        <PasswordChangePreferencesScript />
        <Footer />
      </div>
    );
  }
}
