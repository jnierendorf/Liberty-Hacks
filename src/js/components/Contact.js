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

    var callbackInfo = this.state.info;
    // Create and render the callback information for the user to see
    const callbackInfoElement =
    <div id="callbackInfo">
      <ul>
        <li dangerouslySetInnerHTML={{__html: 'N-Number: ' + callbackInfo.number}} />
        <li dangerouslySetInnerHTML={{__html: 'Callback number: ' + callbackInfo.callback}} />
        <li dangerouslySetInnerHTML={{__html: 'Summary: ' + callbackInfo.summary}} />
        <li dangerouslySetInnerHTML={{__html: 'Urgency: ' + callbackInfo.urgency}} />
        <li dangerouslySetInnerHTML={{__html: 'Time: ' + callbackInfo.time}} />
      </ul>
    </div>;

    console.log(document.getElementById("ConfirmationDetails"));
  }
  toggleConfirmation() {
    this.setState({
      showConfirmation: false
    });
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
