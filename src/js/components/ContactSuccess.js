import React from 'react';

import '../../css/components/ContactSuccess.css';

export default class ContactSuccess extends React.Component {
  render() {
    return (
      <div className='SuccessPopup'>
        <div className='SuccessPopupInner'>
          <h2>Request Submitted!</h2>
          <div className='SuccessPopupExit' onClick={this.props.closePopup}>Back</div>
        </div>
      </div>
    );
  }
}
