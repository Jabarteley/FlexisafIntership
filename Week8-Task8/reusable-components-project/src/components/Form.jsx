import React, { useState } from 'react';
import './GlassComponents.css';

const Form = ({ onSubmit, children, title, className = '', ...props }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  // Provide context or props to child components
  const formContext = {
    formData,
    handleChange
  };

  return (
    <form onSubmit={handleSubmit} className={`glass-form ${className}`} {...props}>
      {title && <h2 className="glass-form-title">{title}</h2>}
      <div className="glass-form-content">
        {React.Children.map(children, (child) => 
          child ? React.cloneElement(child, { formContext }) : child
        )}
      </div>
      <div className="glass-form-actions">
        <button type="submit" className="glass-button glass-button-primary">Submit</button>
        <button type="button" className="glass-button glass-button-secondary" onClick={() => setFormData({})}>Reset</button>
      </div>
    </form>
  );
};

export default Form;