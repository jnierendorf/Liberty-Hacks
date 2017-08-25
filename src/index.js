import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { HashRouter, hashHistory, Switch } from 'react-router-dom';
import './index.css';
import App from './js/App';
import Skype1 from './js/skype/Skype1.js';
import SkypePageWontLaunch from './js/skype/SkypePageWontLaunch.js';
import Password1 from './js/password/Password1.js';
import PasswordPageChangePassword from './js/password/PasswordPageChangePassword.js';
import PasswordPageChangePreferences from './js/password/PasswordPageChangePreferences.js';
import Outlook1 from './js/outlook/Outlook1.js';
import SkypePageChangeAddPic from './js/skype/SkypePageChangeAddPic.js';
import OutlookPageChangeAddPic from './js/outlook/OutlookPageChangeAddPic.js';
import OutlookPageOOOReply from './js/outlook/OutlookPageOOOReply.js';
import Rsa1 from './js/rsa/Rsa1.js';
import RsaPageUnableToConnect from './js/rsa/RsaPageUnableToConnect.js';
import RsaPageVPNConnect from './js/rsa/RsaPageVPNConnect.js';
import RsaPageVPNTroubleshooting from './js/rsa/RsaPageVPNTroubleshooting.js';
import Hardware1 from './js/hardware/Hardware1.js';
import HardwarePagePrepareNewComp from './js/hardware/HardwarePagePrepareNewComp.js';
import PageBuysmart from './js/hardware/PageBuysmart.js';
import Phone1 from './js/phone/Phone1.js';
import PhonePageSecure from './js/phone/PhonePageSecure.js';
import PhonePageSkypeApple from './js/phone/PhonePageSkypeApple.js';
import PhonePageSkypeAndroid from './js/phone/PhonePageSkypeAndroid.js';
import Benefits1 from './js/benefits/Benefits1.js';

var Home = React.createClass({
  render: function() {
    return (
      <div>
      <h1>Home</h1>
      </div>
    );
  }
});

ReactDOM.render(
<HashRouter>
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/skype' component={Skype1} />
    <Route exact path='/skype/wontlaunch' component={SkypePageWontLaunch} />
    <Route exact path='/skype/changeaddpic' component={SkypePageChangeAddPic} />
    <Route exact path='/outlook' component={Outlook1} />
    <Route exact path='/outlook/changeaddpic' component={OutlookPageChangeAddPic} />
    <Route exact path='/outlook/oooreply' component={OutlookPageOOOReply} />
    <Route exact path='/password' component={Password1} />
    <Route exact path='/password/changepassword' component={PasswordPageChangePassword} />
    <Route exact path='/password/changepreferences' component={PasswordPageChangePreferences} />
    <Route exact path='/rsa' component={Rsa1} />
    <Route exact path='/rsa/unabletoconnect' component={RsaPageUnableToConnect} />
    <Route exact path='/rsa/vpnconnect' component={RsaPageVPNConnect} />
    <Route exact path='/rsa/vpntroubleshooting' component={RsaPageVPNTroubleshooting} />
    <Route exact path='/outlook/changeaddpic' component={OutlookPageChangeAddPic} />
    <Route exact path='/outlook/oooreply' component={OutlookPageOOOReply} />
    <Route exact path='/phone' component={Phone1} />
    <Route exact path='/phone/secure' component={PhonePageSecure} />
    <Route exact path='/phone/skypeapple' component={PhonePageSkypeApple} />
    <Route exact path='/phone/skypeandroid' component={PhonePageSkypeAndroid} />
    <Route exact path='/hardware' component={Hardware1} />
    <Route exact path='/hardware/preparenewcomp' component={HardwarePagePrepareNewComp} />
    <Route exact path='/hardware/buysmart' component={PageBuysmart} />
    <Route exact path='/benefits' component={Benefits1} />
  </Switch>
</HashRouter>,
document.getElementById('root')
);
