import React from 'react';
import DeveloperHeadshot from './DeveloperHeadshot';
import './Developers.css'

const developers = [
  { id: '1', name: 'Spencer McGoey', headshotUrl: '/developers/Spencer.jpeg'},
  { id: '2', name: 'Mazi Ahmed', headshotUrl: '/developers/Mazi.png'},
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