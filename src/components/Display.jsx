import React from 'react';

const Display = ({ expression, displayValue }) => {
  return (
    <div className="display">
      <div className="expression">
        {expression || '\u00A0'}
      </div>
      <div className="current-value">
        {displayValue}
      </div>
    </div>
  );
};

export default Display;