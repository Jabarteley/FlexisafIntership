import React from 'react';
import './GlassComponents.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, disabled, className = '', ...props }) => {
  const buttonClasses = [
    'glass-button',
    `glass-button-${variant}`,
    `glass-button-${size}`,
    disabled ? 'glass-button-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;