import React from 'react';

import '../../../../css/components/Scripts.css';

export default class NavigatorOpeningScript extends React.Component {
  render() {
    return (
      <div className="Script">
        <ol>
          <li>If your security access request marked as complete today? If so, please try again tomorrow before calling the help desk.</li>
          <li>Is this for a training environment? If so follow <b><a href="https://libertymutual-ss.rightanswers.com/portal/app/portlets/results/viewsolution.jsp?solutionid=130520190047948">this solution</a></b>.</li>
        </ol>
      </div>
    );
  }
}
