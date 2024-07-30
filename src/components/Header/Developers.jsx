import React from 'react';
import DeveloperHeadshot from './DeveloperHeadshot';
import './Developers.css'

const developers = [
  { id: '1', name: 'Spencer McGoey', headshotUrl: 'https://pbs.twimg.com/media/FucgGSvWcAEsm-q.jpg:large' },
  { id: '2', name: 'Mazi Ahmed', headshotUrl: 'https://lh5.googleusercontent.com/proxy/hvjlPVUM0RVZuHu-iLI-1Rx7ud2JDcFXTqWHdGSIiigohfKNf4cX9EqpBMS8iKwUmz2JQybRrAxrjeci3veN_ECiGyLYJnvwtHya2IccP6Pa5LmrJf2SC8NmmfnFOi_YDHslMIa8SGoDHXo0k-jJEkKj97lfXmrEZnGPu9YFajr2pgkyNdvDYekNCbWUIHq9E04' },
];

const Developers = () => {
  return (
    <div>
      <div className="developer-icons">
        {developers.map(developer => (
          <DeveloperHeadshot key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default Developers;