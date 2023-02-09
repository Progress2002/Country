import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    name,
    population,
    continent,
    capital,
    flag,
  } = props;

  return (
    <button id="45" type="button" className="country">
      <div className="img-holder">
        <img
          className="country-flag"
          alt="country-flag"
          src={flag}
        />
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <p>
          Population :
          <span className="lighter-text">
            {' '}
            {population}
          </span>
        </p>
        <p>
          Continent :
          <span className="lighter-text">
            {' '}
            {continent}
          </span>
        </p>
        <p>
          Capital  :
          <span className="lighter-text">
            {' '}
            {capital}
          </span>
        </p>
      </div>
    </button>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  continent: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Card;
