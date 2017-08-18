import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/components/Contact.css';

import ContactPopup from './ContactPopup';
import ContactSuccess from './ContactSuccess';
import ContactConfirmation from './ContactConfirmation';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      showSuccess: false,
      showConfirmation: false,
      info: null
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  toggleSuccess(callbackInfo) {
    this.setState({
      showPopup: !this.state.showPopup,
      showSuccess: !this.state.showSuccess,
      info: callbackInfo
    });
  }
  toggleBack() {
    this.setState({
      showPopup: false,
      showSuccess: false,
      showConfirmation: true
    });
  }
  toggleConfirmation() {
    this.setState({
      showConfirmation: false
    });

    alert("Call has been cancelled.");
  }
  render() {
    return (
      <div className='Contact'>
        <button type="button" className='ContactButton' onClick={this.togglePopup.bind(this)}>Contact the IT Help Desk</button>
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
        {this.state.showConfirmation ?
          <ContactConfirmation
            closePopup={this.toggleConfirmation.bind(this)}
            time={this.state.info.time}
            callback={this.state.info.callback}
          />
          : null
        }
      </div>
    );
  }
}
