import React from 'react';

import Cards from './Cards';
import Searchbar from './Searchbar';
import Contact from './Contact';

export default class Content extends React.Component {
  render() {
    return (
      <div className="App">
        <Cards />
        <Searchbar />
        <Contact />
      </div>
    );
  }
}
