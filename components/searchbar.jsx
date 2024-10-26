import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function SearchBar() {
    const [talents, setTalents] = useState([
        {
          id: 0,
          talent: 'Technical support specialist'
        },
        {
          id: 1,
          talent: 'Computer programmer'
        },
        {
          id: 2,
          talent: 'Data Analyst'
        },
        {
          id: 3,
          talent: 'Web Developer'
        },
        {
          id: 4,
          talent: 'Sales Engineer'
        },
        {
            id: 5,
            talent: 'Network Engineer'
        },
        {
            id: 6,
            talent: 'Database Administrator'
        },
        {
            id: 7,
            talent: 'Cybersecurity Specialist'
        }

      ]);

      const handleOnSearch = (string, results) => {
        // Triggered when the user types in the search input
        console.log(string, results);
      };
    
      const handleOnHover = (item) => {
        // Triggered when the user hovers over an item in the suggestions list
        console.log('Item hovered:', item);
      };
    
      const handleOnSelect = (item) => {
        // Triggered when the user selects an item from the suggestions list
        console.log('Item selected:', item);
        onSearchSelected(item);
      };
    

      return (
        <div className="search-bar-container">
          <ReactSearchAutocomplete
            talents = {talents}
            onSearch = {handleOnSearch}
            onHover = {handleOnHover}
            onSelect = {handleOnSelect}
          />
        </div>
  );
}

export default SearchBar;
