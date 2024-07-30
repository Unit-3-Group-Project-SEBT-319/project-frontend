import React, { useState } from 'react';

const InlineEdit = ({ value, onSetValue, type = 'text', options = [], optionNames = {} }) => {
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
                {optionNames[option] || option}
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
            <img src={value} alt="playlist" className="img-fluid" title={optionNames[value] || value} style={{ width: '220px', height: 'auto' }}/>
          ) : (
            value
          )}
        </span>
      )}
    </div>
  );
};

export default InlineEdit;