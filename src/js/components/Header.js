import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">
          <h1>Hi {this.props.name}, what do you need help with today?</h1>
        </div>
      </div>
    );
  }
}
