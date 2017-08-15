import React from 'react';

import '../../css/components/Contact.css';

import ContactPopup from './ContactPopup';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='Contact'>
        <button className='ContactButton' onClick={this.togglePopup.bind(this)}>Contact the IT Help Desk</button>
        {this.state.showPopup ?
          <ContactPopup
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}
