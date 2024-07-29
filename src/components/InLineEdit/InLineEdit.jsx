import React, { useState } from 'react';

const InlineEdit = ({ value, onSetValue, type = 'text', options = [] }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSetValue(inputValue);
    setIsEditing(false);
  };

  const handleSelectChange = (e) => {
    setInputValue(e.target.value);
    onSetValue(e.target.value);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        type === 'select' ? (
          <select value={inputValue} onChange={handleSelectChange} onBlur={handleSave} autoFocus>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        )
      ) : (
        <span onClick={() => setIsEditing(true)}>
          {type === 'select' ? (
            <img src={value} alt="playlist" className="playlist-image img-fluid" />
          ) : (
            value
          )}
        </span>
      )}
    </div>
  );
};

export default InlineEdit;
