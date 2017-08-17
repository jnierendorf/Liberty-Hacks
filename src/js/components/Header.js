import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1>Welcome to HelpHub</h1>
          <div className = "MiniHeader">
            <li>Hi User, what do you need help with today?</li>
          </div>
      </div>
    );
  }
}
