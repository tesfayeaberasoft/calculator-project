import React from 'react';

const Button = ({ children, onClick, variant = 'default', wide = false }) => {
  const getButtonClass = () => {
    let baseClass = 'btn';
    if (wide) baseClass += ' btn-wide';
    
    switch (variant) {
      case 'operator':
        return `${baseClass} btn-operator`;
      case 'special':
        return `${baseClass} btn-special`;
      case 'equals':
        return `${baseClass} btn-equals`;
      case 'clear':
        return `${baseClass} btn-clear`;
      default:
        return `${baseClass} btn-default`;
    }
  };

  return (
    <button 
      className={getButtonClass()} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;