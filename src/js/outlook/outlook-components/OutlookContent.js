import React from 'react';


import OutlookCards from './OutlookCards';
import Searchbar from '../../components/Searchbar';
import Contact from '../../components/Contact';

export default class OutlookContent extends React.Component {
  render() {
    return (
      <div>
        <OutlookCards />
        <Contact />
      </div>
    );
  }
}
