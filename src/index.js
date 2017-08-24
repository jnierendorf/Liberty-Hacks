import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { HashRouter, hashHistory, Switch } from 'react-router-dom';
import './index.css';
import App from './js/App';
import Skype1 from './js/skype/Skype1.js';
import SkypePageWontLaunch from './js/skype/SkypePageWontLaunch.js';
import SkypePageChangeAddPic from './js/skype/SkypePageChangeAddPic.js';
import OutlookPageChangeAddPic from './js/outlook/OutlookPageChangeAddPic.js';
import Outlook1 from './js/outlook/Outlook1.js';

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
  </Switch>
</HashRouter>,
document.getElementById('root')
);
