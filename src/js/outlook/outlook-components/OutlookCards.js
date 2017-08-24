import React from 'react';

import ChangeOutlookPic from './outlook-cards/ChangeOutlookPic';

import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class OutlookCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <Link to='/outlook/changeaddpic'><ChangeOutlookPic /></Link>
      </div>
    );
  }
}
