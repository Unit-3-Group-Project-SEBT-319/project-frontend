import React, { useState } from 'react';

const InlineEdit = ({ value, onSetValue, type = 'text', options = [], optionNames = {}, className = '' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    if (inputValue.trim() !== '') {
      onSetValue(inputValue);
    } else {
      setInputValue(value); 
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleSelectChange = (e) => {
    setInputValue(e.target.value);
    onSetValue(e.target.value);
    setIsEditing(false);
  };

  const handleBlur = () => {
    if (inputValue.trim() !== '') {
      onSetValue(inputValue);
    } else {
      setInputValue(value);
    }
    setIsEditing(false);
  };

  return (
    <span className={`inline-edit-wrapper ${className}`}>
      {isEditing ? (
        type === 'select' ? (
          <select
            value={inputValue}
            onChange={handleSelectChange}
            onBlur={handleBlur}
            autoFocus
            style={{ color: 'white' }}
            className={className}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {optionNames[option] || option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className={className}
          />
        )
      ) : (
        <span onClick={() => setIsEditing(true)} className={className}>
          {type === 'select' ? (
            <img
              src={value}
              alt="playlist"
              className="img-fluid"
              title={optionNames[value] || value}
              style={{ width: '220px', height: 'auto' }}
            />
          ) : (
            value
          )}
        </span>
      )}
    </span>
  );
};

export default InlineEdit;
