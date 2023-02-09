import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import getCountries from '../redux/api';
import SearchBar from './Search';
import Country from './Country';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.length]);

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
        <SearchBar />
        <div className="card-container">
          {countries.map((country) => (
            <Country
              key={country.population}
              name={country.name.common}
              population={country.population}
              capital={country.capital}
              continent={country.continents}
              flag={country.flags.png}
            />
          ))}
          ;
        </div>
      </main>
    </>
  );
};

export default Home;
