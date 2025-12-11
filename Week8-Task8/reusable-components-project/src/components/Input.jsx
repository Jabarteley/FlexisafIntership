import React from 'react';
import './GlassComponents.css';

const Input = ({ label, placeholder, type = 'text', value, onChange, error, disabled, className = '', ...props }) => {
  return (
    <div className="glass-input-container">
      {label && <label className="glass-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`glass-input ${error ? 'glass-input-error' : ''} ${className}`}
        {...props}
      />
      {error && <span className="glass-error-message">{error}</span>}
    </div>
  );
};

export default Input;