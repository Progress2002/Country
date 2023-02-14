import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './DetailsPageHeader';

const DetailsPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <Header />
      <div className="details-container">
        <h2>{data.name}</h2>
        <div className="details-content">
          <div className="image-container">
            <img src={data.flag} alt="Country flag" />
          </div>
          <div className="details">
            {
            data.nativeName
              ? (
                <p className="list">
                  Native Name :
                  <span className="lighter">{data.nativeName}</span>
                </p>
              ) : ''
          }
            {
            data.population
              ? (
                <p className="list">
                  Population :
                  <span className="lighter">{data.population}</span>
                </p>
              ) : ''
          }
            {
            data.region
              ? (
                <p className="list">
                  Region :
                  <span className="lighter">{data.region}</span>
                </p>
              ) : ''
          }
            {
            data.subregion
              ? (
                <p className="list">
                  Sub Region :
                  <span className="lighter">{data.subregion}</span>
                </p>
              ) : ''
          }
            {
            data.capital
              ? (
                <p className="list">
                  Capital :
                  <span className="lighter">{data.capital}</span>
                </p>
              ) : ''
          }
          </div>
          <div className="details-content last-details">
            {
            data.currencies
              ? (
                <p className="list-2">
                  Currency :
                  <span className="lighter">{data.currencies[0].name}</span>
                </p>
              ) : ''
          }
            {
            data.timezones
              ? (
                <p className="flex list-2">
                  Timezones :
                  {data.timezones.map((time) => <span className="details-btn" key={time}>{time}</span>)}
                </p>
              ) : ''
          }
            {
            data.topLevelDomain
              ? (
                <p className="list-2">
                  Top Level Domain :
                  <span className="lighter">{data.topLevelDomain[0]}</span>
                </p>
              ) : ''
          }
            {
            data.languages
              ? (
                <p className="list-2">
                  Languages :
                  {data.languages.map((language) => <span className="details-btn" key={language.name}>{language.name}</span>)}
                </p>
              ) : ''
          }
            {
            data.borders
              ? (
                <p className="flex list-2">
                  Border Countries :
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
