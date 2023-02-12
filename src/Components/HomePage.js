import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaHome, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import getCountries from '../redux/api';
import Country from './Country';

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
      <header>
        <div className="header-content">
          <nav>
            <h1 className="home-icon">
              <Link to="/">
                <FaHome className="home-link-icon" />
              </Link>
            </h1>
            <h2>Countries Of The World</h2>
            <ul>
              <li>
                <FaMicrophone className="nav-icons" />
              </li>
              <li>
                <IoMdSettings className="nav-icons" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
