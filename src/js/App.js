import React, { Component } from 'react';
import '../css/App.css';

import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
