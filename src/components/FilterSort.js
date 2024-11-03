import React from 'react';  

const FilterSort = ({ onFilterChange, onSortChange }) => {  
  return (  
    <div>  
      <button onClick={() => onFilterChange(true)}>Filter Greased</button>  
      <button onClick={() => onFilterChange(false)}>Show All</button>  

      <select onChange={(e) => onSortChange(e.target.value)}>  
        <option value="">Sort By</option>  
        <option value="name">Name</option>  
        <option value="weight">Weight</option>  
      </select>  
    </div>  
  );  
};  

export default FilterSort;