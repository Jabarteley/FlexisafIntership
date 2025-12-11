import React, { useState } from 'react';
import './GlassComponents.css';
import Table from './Table';

const DataTable = ({ headers, data, enablePagination = true, rowsPerPage = 5, className = '', ...props }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate pagination
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="glass-datatable-container">
      <Table 
        headers={headers} 
        data={enablePagination ? paginatedData : data} 
        className={className} 
        {...props} 
      />
      
      {enablePagination && totalPages > 1 && (
        <div className="glass-pagination">
          <button 
            className="glass-pagination-btn" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          <span className="glass-pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          
          <button 
            className="glass-pagination-btn" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;