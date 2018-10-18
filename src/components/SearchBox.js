import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 br-pill ba b--black"
        type="search"
        placeholder="&#61442; &nbsp; Type a name..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
