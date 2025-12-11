import React from 'react';
import './GlassComponents.css';

const Table = ({ headers, data, className = '', ...props }) => {
  return (
    <div className="glass-table-container">
      <table className={`glass-table ${className}`} {...props}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="glass-table-header">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="glass-table-row">
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="glass-table-cell">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;