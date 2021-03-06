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
import Laptops1 from './js/laptops/Laptops1.js';
import LaptopsPagePrepareNewComp from './js/laptops/LaptopsPagePrepareNewComp.js';
import PageBuysmart from './js/laptops/PageBuysmart.js';
import Phone1 from './js/phone/Phone1.js';
import PhonePageSecure from './js/phone/PhonePageSecure.js';
import PhonePageSkypeApple from './js/phone/PhonePageSkypeApple.js';
import PhonePageSkypeAndroid from './js/phone/PhonePageSkypeAndroid.js';
import Benefits1 from './js/benefits/Benefits1.js';
import BuildingAccess1 from './js/buildingaccess/BuildingAccess1.js';
import CustomersFirst1 from './js/customersfirst/CustomersFirst1.js';
import CustomersFirstPageApplicationAccess from './js/customersfirst/CustomersFirstPageApplicationAccess.js';
import CustomersFirstPageCFProperty from './js/customersfirst/CustomersFirstPageCFProperty.js';
import CustomersFirstPagePrintPortal from './js/customersfirst/CustomersFirstPagePrintPortal.js';
import Navigator1 from './js/navigator/Navigator1.js';
import NavigatorPageError from './js/navigator/NavigatorPageError.js';
import NavigatorPageOpening from './js/navigator/NavigatorPageOpening.js';
import NavigatorPageUpgrades from './js/navigator/NavigatorPageUpgrades.js';

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
    <Route exact path='/laptops' component={Laptops1} />
    <Route exact path='/laptops/preparenewcomp' component={LaptopsPagePrepareNewComp} />
    <Route exact path='/laptops/buysmart' component={PageBuysmart} />
    <Route exact path='/benefits' component={Benefits1} />
    <Route exact path='/buildingaccess' component={BuildingAccess1} />
    <Route exact path='/customersfirst' component={CustomersFirst1} />
    <Route exact path='/customersfirst/applicationaccess' component={CustomersFirstPageApplicationAccess} />
    <Route exact path='/customersfirst/cfproperty' component={CustomersFirstPageCFProperty} />
    <Route exact path='/customersfirst/printportal' component={CustomersFirstPagePrintPortal} />
    <Route exact path='/navigator' component={Navigator1} />
    <Route exact path='/navigator/error' component={NavigatorPageError} />
    <Route exact path='/navigator/opening' component={NavigatorPageOpening} />
    <Route exact path='/navigator/upgrades' component={NavigatorPageUpgrades} />
  </Switch>
</HashRouter>,
document.getElementById('root')
);
