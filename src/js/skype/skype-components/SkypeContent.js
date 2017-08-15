import React from 'react';


import SkypeCards from './SkypeCards';
import Searchbar from '../../components/Searchbar';
import Contact from '../../components/Contact';

export default class SkypeContent extends React.Component {
  render() {
    return (
      <div>
        <SkypeCards />
        <Searchbar />
        <Contact />
      </div>
    );
  }
}
