import React from 'react';
import './GlassComponents.css';

const Checkbox = ({ label, checked, onChange, disabled, className = '', ...props }) => {
  return (
    <label className={`glass-checkbox-container ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="glass-checkbox-input"
        {...props}
      />
      <span className="glass-checkbox-custom"></span>
      {label && <span className="glass-checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;