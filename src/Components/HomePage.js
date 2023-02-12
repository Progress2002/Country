import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getCountries from '../redux/api';
import Country from './Country';
import Header from './HomePageHeader';

const HomePage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.length]);

  const newCountries = countries.filter((country) => (
    country.name.toLowerCase().includes(searchItem.toLowerCase())
    || country.region.toLowerCase().includes(searchItem.toLowerCase())));

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <>
      <Header />
      <main>
        <input
          className="search-bar"
          type="text"
          name="searchItem"
          placeholder="search for a country"
          value={searchItem}
          onChange={handleSearch}
        />
        <div className="card-container">
          {
            searchItem.length
              ? newCountries.map((country) => (
                <Country
                  key={uuidv4()}
                  data={country}
                />
              ))
              : countries.map((country) => (
                <Country
                  key={uuidv4()}
                  data={country}
                />
              ))
          }
        </div>
      </main>
    </>
  );
};

export default HomePage;
