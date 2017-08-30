import React from 'react';

import Cards from './Cards';

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Cards showNed={this.props.showNed}/>
      </div>
    );
  }
}
