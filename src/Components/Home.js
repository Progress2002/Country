import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import SearchBar from './Search';
import Card from './Card';

const Home = () => {
  const [countryArr] = useState([
    {
      name: {
        common: 'United Arab Emirates',
        official: 'United Arab Emirates',
      },
      capital: [
        'Abu Dhabi',
      ],
      region: 'Asia',
      subregion: 'Western Asia',
      languages: {
        ara: 'Arabic',
      },
      continents: [
        'Asia',
      ],
      population: 9890400,
      flags: {
        png: 'https://flagcdn.com/w320/ae.png',
        svg: 'https://flagcdn.com/ae.svg',
        alt: 'The flag of United Arab Emirates features a red vertical band on its hoist side that takes up about one-fourth the width of the field and three equal horizontal bands of green, white and black adjoining the vertical band.',
      },
    },
    {
      name: {
        common: 'Benin',
        official: 'Republic of Benin',
        nativeName: {
          fra: {
            official: 'République du Bénin',
            common: 'Bénin',
          },
        },
      },
      capital: [
        'Porto-Novo',
      ],
      region: 'Africa',
      subregion: 'Western Africa',
      languages: {
        fra: 'French',
      },
      continents: [
        'Asia',
      ],
      population: 12123198,
      flags: {
        png: 'https://flagcdn.com/w320/bj.png',
        svg: 'https://flagcdn.com/bj.svg',
        alt: 'The flag of Benin features a green vertical band on its hoist side that takes up about two-fifth the width of the field and two equal horizontal bands of yellow and red adjoining the vertical band.',
      },
    },

  ]);

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
          {countryArr.map((country) => (
            <Card
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
