import React from 'react';

import TimePicker from 'rc-time-picker';
import moment from 'moment';

import '../../css/components/ContactPopup.css';
import 'rc-time-picker/assets/index.css'

export default class ContactPopup extends React.Component {
  onChange(value) {
    console.log(value && value.format('h:mm a'));
  }
  render() {
    return (
      <div className='Popup'>
        <div className='PopupInner'>
          <div className='PopupExit' onClick={this.props.closePopup}>X</div>
          <h1>Contact the IT Help Desk</h1>
          <h3>Estimated wait time:</h3>
          <h2>6 Minutes</h2>
          <form>

            <div className="ContactInput">
              <span>N-Number:</span>
              <input type="text" name="n-number"/>
            </div>

            <div className="ContactInput">
              <span>Callback #:</span>
              <input type="text" name="callback"/>
            </div>

            <div className="ContactInput ContactSummary">
              <span>Summary of Issue:</span>
              <textarea type="text" name="summary"/>
            </div>

            <div className="ContactInput">
              <span>Urgency:</span>
              <div className="ContactUrgencyInput">
                <input type="radio" name="urgency" value="high"/>
                <span>High</span>
              </div>
              <div className="ContactUrgencyInput">
                <input type="radio" name="urgency" value="med"/>
                <span>Med</span>
              </div>
              <div className="ContactUrgencyInput">
                <input type="radio" name="urgency" value="low" defaultChecked/>
                <span>Low</span>
              </div>
            </div>

            <div className="ContactInput">
              <span>Callback Time:</span>
              <div className="ContactTime">
                <div className="ContactTimeInput">
                  <input type="radio" name="callback" value="asap" defaultChecked/>
                  <span>ASAP</span>
                </div>
                <div className="ContactTimeInput">
                  <input type="radio" name="callback" value="custom"/>
                    <TimePicker
                      showSecond={false}
                      defaultValue={moment().hour(0).minute(0)}
                      className="ContactTimePicker"
                      onChange={this.onChange}
                      format={'h:mm a'}
                      use12Hours />
                </div>
              </div>
            </div>

            <br/><br/><br/>
            <input type="submit" value="Submit Request" className="ContactButton"/>

          </form>
        </div>
      </div>
    );
  }
}
