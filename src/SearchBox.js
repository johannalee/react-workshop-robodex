import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="pa2">
      <input
        className="pa2"
        type="search"
        placeholder="Search Me"
        onChange={props.onSearchChange} // >>>>>> onChange={() => {}} better performance
      />
    </div>
  );
};

export default SearchBox;