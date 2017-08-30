import React from 'react';

import '../../../../css/components/Scripts.css';

export default class CustomersFirstApplicationAccessScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <p>Geico Liberty Systems Access: <b><a href="https://csw.libertymutual.com/PMCSW.html">--- Production ---</a></b>  ||||  <b><a href="https://trn-csw.libertymutual.com/PMCSW.html">--- Training ---</a></b></p>
        <p>Other Systems:</p>
        <ol>
          <li>Intake entered into proprietary rater.</li>
          <li>Information transferred to Liberty via LeadCloud or direct integration.</li>
          <li>Rates from multiple carriers display in agency rater.</li>
          <li>Agent bridges to CSW to complete quote and bind. There are some agencies that can skip this step and bind in their proprietary system.</li>
        </ol>
      </div>
    );
  }
}
