import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Developers from '../Header/Developers';
import './UserButton.css';

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="new-user-button-container">
      <button className="new-user-button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faUser} />
      </button>
      <div className={`developer-dropdown ${isOpen ? 'show' : ''}`}>
        <Developers />
      </div>
    </div>
  );
};

export default UserButton;
