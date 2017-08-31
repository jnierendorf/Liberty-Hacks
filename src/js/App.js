import React, { Component } from 'react';
import '../css/App.css';

import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Tutorial from './components/Tutorial';
import ChatBotHelp from './components/ChatBotHelp';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ned",
      showNed: true,
      nNumber: "n0268610",
      callbackNumber: "(603)-521-5970"
    }
  }
  togglePopup() {
    if (this.state.name == "Ned") {
      this.setState({
        name: "Cassie",
        showNed: false,
        nNumber: "n0321661",
        callbackNumber: "(718)-322-6784"
      });
    }
    else if (this.state.name == "Cassie") {
      this.setState({
        name: "Ned",
        showNed: true,
        nNumber: "n0268610",
        callbackNumber: "(603)-521-5970"
      });
    }
  }
  render() {
    return (
      <div>
        <button className="TogglePersona" onClick={this.togglePopup.bind(this)}>Toggle Persona</button>
        <Header name={this.state.name}/>
        <Content showNed={this.state.showNed}/>
        <Footer nNumber={this.state.nNumber} callbackNumber={this.state.callbackNumber}/>
      </div>
    );
  }
}
