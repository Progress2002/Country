import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div className="container">
        <h2>{data.name}</h2>
        <div className="details">
          <div className="details-content">
            <img src={data.flag} alt="Country flag" />
          </div>
          <div className="details-content">
            {
            data.nativeName
              ? (
                <p>
                  Native Name:
                  <span className="lighter">{data.nativeName}</span>
                </p>
              ) : ''
          }
            {
            data.population
              ? (
                <p>
                  Population:
                  <span className="lighter">{data.population}</span>
                </p>
              ) : ''
          }
            {
            data.region
              ? (
                <p>
                  Region:
                  <span className="lighter">{data.region}</span>
                </p>
              ) : ''
          }
            {
            data.subregion
              ? (
                <p>
                  Sub Region:
                  <span className="lighter">{data.subregion}</span>
                </p>
              ) : ''
          }
            {
            data.capital
              ? (
                <p>
                  Capital:
                  <span className="lighter">{data.capital}</span>
                </p>
              ) : ''
          }
          </div>
          <div className="details-content">
            {
            data.currencies
              ? (
                <p>
                  Currency:
                  <span className="lighter">{data.currencies[0].name}</span>
                </p>
              ) : ''
          }
            {
            data.timezones
              ? (
                <p>
                  Timezones:
                  {data.timezones.map((time) => <span className="details-btn" key={time}>{time}</span>)}
                </p>
              ) : ''
          }
            {
            data.topLevelDomain
              ? (
                <p>
                  Top Level Domain:
                  <span className="lighter">{data.topLevelDomain[0]}</span>
                </p>
              ) : ''
          }
            {
            data.languages
              ? (
                <p>
                  Languages:
                  {data.languages.map((language) => <span className="details-btn" key={language.name}>{language.name}</span>)}
                </p>
              ) : ''
          }
            {
            data.borders
              ? (
                <p>
                  Border Countries:
                  {data.borders.map((border) => <span className="details-btn" key={border}>{border}</span>)}
                </p>
              ) : ''
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
