import React from 'react';

import PasswordCard from './cards/PasswordCard';
import RsaCard from './cards/RsaCard';
import OutlookCard from './cards/OutlookCard';
import PhoneCard from './cards/PhoneCard';
import HardwareCard from './cards/HardwareCard';
import SkypeCard from './cards/SkypeCard';

export default class Cards extends React.Component {
  render() {
    return (
      <div className="Caaaads">
        <PasswordCard />
        <RsaCard />
        <OutlookCard />
        <PhoneCard />
        <HardwareCard />
        <SkypeCard />
      </div>
    );
  }
}
