import React from 'react';

import PasswordMyPassword from './password-cards/PasswordMyPassword';
import PasswordChangePassword from './password-cards/PasswordChangePassword';
import PasswordChangePreferences from './password-cards/PasswordChangePreferences';
import PasswordChangePasswordScript from './password-scripts/PasswordChangePasswordScript';
import PasswordChangePreferencesScript from './password-scripts/PasswordChangePreferencesScript';

import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class PasswordCards extends React.Component {
  render() {
    return (
      <div className="DrilldownCards">
        <a href="https://mypassword.lmig.com/welcome"><PasswordMyPassword /></a>
        <Link to='/password/changepassword'><PasswordChangePassword /></Link>
        <Link to='/password/changepreferences'><PasswordChangePreferences /></Link>
      </div>
    );
  }
}
