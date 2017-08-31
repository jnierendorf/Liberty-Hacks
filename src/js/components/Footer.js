import React from 'react';

import Searchbar from './Searchbar';
import Contact from './Contact';
import ChatBotHelp from './ChatBotHelp';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
      <div>
        <Searchbar />
        <Contact />
        <ChatBotHelp name={this.props.name}/>
      </div>
      <div className="Footer">
        <p>1-888-877-2255</p>
      </div>
      </div>
    );
  }
}
