import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/details/${data.name}`, { state: data });
  };

  return (
    <button onClick={handleRoute} type="button" className="country">
      <div className="img-holder">
        <img
          className="country-flag"
          alt="country-flag"
          src={data.flag}
        />
      </div>
      <div className="card-body">
        <h2>{data.name}</h2>
        <p>
          Population :
          <span className="lighter-text">
            {' '}
            {data.population}
          </span>
        </p>
        <p>
          Continent :
          <span className="lighter-text">
            {' '}
            {data.region}
          </span>
        </p>
        <p>
          Capital  :
          <span className="lighter-text">
            {' '}
            {data.capital}
          </span>
        </p>
      </div>
    </button>
  );
};

export default Country;
