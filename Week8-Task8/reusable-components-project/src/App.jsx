import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Table from './components/Table';
import DataTable from './components/DataTable';
import Form from './components/Form';
import './App.css';

function App() {
  // Sample data for tables
  const tableHeaders = ['Name', 'Age', 'Role', 'Status'];
  const tableData = [
    { Name: 'John Doe', Age: 30, Role: 'Developer', Status: 'Active' },
    { Name: 'Jane Smith', Age: 25, Role: 'Designer', Status: 'Active' },
    { Name: 'Robert Johnson', Age: 35, Role: 'Manager', Status: 'Inactive' },
    { Name: 'Emily Davis', Age: 28, Role: 'Analyst', Status: 'Active' },
    { Name: 'Michael Wilson', Age: 32, Role: 'Engineer', Status: 'Active' },
    { Name: 'Sarah Brown', Age: 29, Role: 'Tester', Status: 'Inactive' },
  ];

  // State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form submission
  const handleFormSubmit = (data) => {
    alert(`Form submitted with data: ${JSON.stringify(data, null, 2)}`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="app-container">
      <h1 className="main-title">Reusable Components</h1>
      
      {/* Lesson Section */}
      <section className="lesson-section">
        <h2 className="section-title">Lesson: Building Reusable Components</h2>
        <p className="lesson-description">
          Creating reusable components is a fundamental practice in React development. 
          Reusable components promote consistency, maintainability, and efficiency in your codebase. 
          Each component should have a single responsibility and accept properties (props) to customize its behavior and appearance.
        </p>
      </section>

      {/* Component Showcase */}
      <section className="component-section">
        <h2 className="section-title">Button Component</h2>
        <div className="demo-container">
          <div className="demo-card">
            <h3 className="demo-title">Variants</h3>
            <div className="component-demo">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary" style={{ marginLeft: '10px' }}>Secondary</Button>
              <Button variant="success" style={{ marginLeft: '10px' }}>Success</Button>
              <Button variant="danger" style={{ marginLeft: '10px' }}>Danger</Button>
            </div>
          </div>
          <div className="demo-card">
            <h3 className="demo-title">Sizes</h3>
            <div className="component-demo">
              <Button size="small">Small</Button>
              <Button size="medium" style={{ marginLeft: '10px' }}>Medium</Button>
              <Button size="large" style={{ marginLeft: '10px' }}>Large</Button>
            </div>
          </div>
          <div className="demo-card">
            <h3 className="demo-title">Disabled State</h3>
            <div className="component-demo">
              <Button disabled>Disabled Button</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2 className="section-title">Input Component</h2>
        <div className="demo-container">
          <div className="demo-card">
            <h3 className="demo-title">Basic Inputs</h3>
            <div className="component-demo">
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Email" type="email" placeholder="Enter your email" />
              <Input label="Password" type="password" placeholder="Enter your password" />
            </div>
          </div>
          <div className="demo-card">
            <h3 className="demo-title">Input with Validation</h3>
            <div className="component-demo">
              <Input 
                label="Username" 
                placeholder="Username (min 3 chars)" 
                error={formData.name.length > 0 && formData.name.length < 3 ? "Username too short" : ""} 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2 className="section-title">Checkbox Component</h2>
        <div className="demo-container">
          <div className="demo-card">
            <h3 className="demo-title">Basic Checkbox</h3>
            <div className="component-demo">
              <Checkbox label="Accept Terms and Conditions" />
              <Checkbox label="Subscribe to newsletter" />
              <Checkbox label="Make profile public" checked />
            </div>
          </div>
          <div className="demo-card">
            <h3 className="demo-title">Disabled Checkbox</h3>
            <div className="component-demo">
              <Checkbox label="Disabled option" disabled />
              <Checkbox label="Checked disabled" checked disabled />
            </div>
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2 className="section-title">Table Component</h2>
        <div className="demo-container">
          <div className="demo-card full-width">
            <h3 className="demo-title">Simple Table</h3>
            <div className="component-demo">
              <Table headers={tableHeaders} data={tableData} />
            </div>
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2 className="section-title">DataTable Component</h2>
        <div className="demo-container">
          <div className="demo-card full-width">
            <h3 className="demo-title">Data Table with Pagination</h3>
            <div className="component-demo">
              <DataTable 
                headers={tableHeaders} 
                data={tableData} 
                rowsPerPage={3} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="component-section">
        <h2 className="section-title">Form Component</h2>
        <div className="demo-container">
          <div className="demo-card full-width">
            <h3 className="demo-title">Contact Form</h3>
            <div className="component-demo">
              <Form 
                title="Contact Us" 
                onSubmit={handleFormSubmit}
              >
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Input
                  label="Subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
                <Input
                  label="Message"
                  type="textarea"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </Form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;