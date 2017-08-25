import React from 'react';

import BenefitsYTR from './benefits-cards/BenefitsYTR';
import '../../../css/components/Cards.css';

import { Link } from 'react-router-dom';


export default class BenefitsCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <a href='http://www.yourtotalrewards.com/libertymutual/' target='_blank'><BenefitsYTR /></a>
      </div>
    );
  }
}
