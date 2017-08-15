import React from 'react';

import ChangeOutlookPic from './outlook-cards/ChangeOutlookPic';

import { Link } from 'react-router-dom';


export default class OutlookCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <ChangeOutlookPic />
      </div>
    );
  }
}
