import React, { useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState({ text: '' });

  const handleUserSearch = (e) => {
    setValue({
      ...value,
      text: e.target.value,
    });
  };

  return (
    <>
      <input
        className="search-bar"
        type="text"
        name="text"
        placeholder="search for a country"
        value={value.text}
        onChange={handleUserSearch}
      />
    </>
  );
};

export default SearchBar;
