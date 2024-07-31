import React, { useState, useRef, useEffect } from 'react';

const InlineEdit = ({ value, onSetValue, onCancel, className }) => {
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSave = () => {
    onSetValue(editValue);
  };

  const handleCancel = () => {
    setEditValue(value);
    onCancel();
  };

  return (
    <span className={`inline-edit-wrapper ${className}`}>
      <input
        ref={inputRef}
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSave();
          } else if (e.key === 'Escape') {
            handleCancel();
          }
        }}
      />
    </span>
  );
};

export default InlineEdit;
