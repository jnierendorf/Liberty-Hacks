import React from 'react';

import '../../css/components/ContactConfirmation.css';

export default class ContactConfirmation extends React.Component {
  render() {
    return (
      <div className='ContactConfirmation'>
        <div className='ConfirmationExit' onClick={this.props.closePopup}>Click here to cancel call</div>
        <div className="ConfirmationDetails">
          Call Scheduled!<br/>
          Callback Number: {this.props.callback}<br/>
          Time: {this.props.time}
        </div>
      </div>
    );
  }
}
