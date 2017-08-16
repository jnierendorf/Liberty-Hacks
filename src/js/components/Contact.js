import React from 'react';

import '../../css/components/Contact.css';

import ContactPopup from './ContactPopup';
import ContactSuccess from './ContactSuccess';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      showSuccess: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  toggleSuccess() {
    this.setState({
      showPopup: !this.state.showPopup,
      showSuccess: !this.state.showSuccess
    })
  }
  toggleBack() {
    this.setState({
      showPopup: false,
      showSuccess: false
    })
  }
  render() {
    return (
      <div className='Contact'>
        <button className='ContactButton' onClick={this.togglePopup.bind(this)}>Contact the IT Help Desk</button>
        {this.state.showPopup ?
          <ContactPopup
            closePopup={this.togglePopup.bind(this)}
            finishPopup={this.toggleSuccess.bind(this)}
          />
          : null
        }
        {this.state.showSuccess ?
          <ContactSuccess
            closePopup={this.toggleBack.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}
