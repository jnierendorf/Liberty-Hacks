import React from 'react';

import Searchbar from './Searchbar';
import Contact from './Contact';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
      <div>
        <Searchbar />
        <Contact />
      </div>
      <div className="Footer">
        <p>Help Desk: 1-888-877-2255</p>
      </div>
      </div>
    );
  }
}
