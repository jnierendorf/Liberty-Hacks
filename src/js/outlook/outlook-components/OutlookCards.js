import React from 'react';

import ChangeOutlookPic from './outlook-cards/ChangeOutlookPic';
import OutlookOOOReply from './outlook-cards/OutlookOOOReply';
import VoicemailOutlookCenter from './outlook-cards/VoicemailOutlookCenter';
import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class OutlookCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <Link to='/outlook/changeaddpic'><ChangeOutlookPic /></Link>
        <Link to='/outlook/oooreply'><OutlookOOOReply /></Link>
        <a href="https://libertymutual-ss.rightanswers.com/portal/app/portlets/results/viewsolution.jsp?solutionid=120920131732435&SToken=001CFBAEFE9E3A1F6AAF32C14E0974E7" target="_blank"><VoicemailOutlookCenter /></a>
      </div>
    );
  }
}
