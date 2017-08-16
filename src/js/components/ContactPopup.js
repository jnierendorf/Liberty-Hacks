import React from 'react';

import TimePicker from 'rc-time-picker-15-minutes';
import moment from 'moment';
import ContactSuccess from './ContactSuccess';
import Contact from './Contact';

import '../../css/components/ContactPopup.css';
import 'rc-time-picker-15-minutes/assets/index.css'

export default class ContactPopup extends React.Component {
  constructor(props) {
    super(props);

    // Set up state to be ready to collect form info
    this.state = {
      number: '',
      callback: '',
      summary: '',
      urgency: 'low',
      time: 'asap'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Update state accordingly when inputs are changed
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    // Get specific time if custom radio button is clicked
    if (this.state.time == 'custom') {
      var pickedTime = document.getElementsByClassName("rc-time-picker-15-minutes-input")[0].value;
      this.state.time = pickedTime;
    }
    event.preventDefault();

    // close the form and open the success page through finishPopup(), while passing args
    this.props.finishPopup(this.state);
  }
  render() {
    return (
      <div className='Popup'>
        <div className='PopupInner'>
          <div className='PopupExit' onClick={this.props.closePopup}>X</div>
          <h1>Contact the IT Help Desk</h1>
          <h3>Estimated wait time:</h3>
          <h2>6 Minutes</h2>
          <form id ="contactForm" onSubmit={this.handleSubmit}>

            <div className="ContactInput">
              <span>N-Number:</span>
              <input type="text" name="number" value={this.state.number} onChange={this.handleChange}/>
            </div>

            <div className="ContactInput">
              <span>Callback #:</span>
              <input type="text" name="callback" value={this.state.callback} onChange={this.handleChange}/>
            </div>

            <div className="ContactInput ContactSummary">
              <span>Summary of Issue:</span>
              <textarea type="text" name="summary" value={this.state.summary} onChange={this.handleChange}/>
            </div>

            <div className="ContactInput">
              <span>Urgency:</span>
              <div className="ContactUrgencyInput">
                <input type="radio" name="urgency" value="high" onClick={this.handleChange}/>
                <span>High</span>
              </div>
              <div className="ContactUrgencyInput">
                <input type="radio" name="urgency" value="med" onClick={this.handleChange}/>
                <span>Med</span>
              </div>
              <div className="ContactUrgencyInput">
                <input type="radio" name="urgency" value="low" onClick={this.handleChange} defaultChecked/>
                <span>Low</span>
              </div>
            </div>

            <div className="ContactInput">
              <span>Callback Time:</span>
              <div className="ContactTime">
                <div className="ContactTimeInput">
                  <input type="radio" name="time" value="asap" onClick={this.handleChange} defaultChecked/>
                  <span>ASAP</span>
                </div>
                <div className="ContactTimeInput">
                  <input type="radio" name="time" value="custom" onClick={this.handleChange}/>
                  <TimePicker
                    id="timePicker"
                    showSecond={false}
                    defaultValue={moment()}
                    className="ContactTimePicker"
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
