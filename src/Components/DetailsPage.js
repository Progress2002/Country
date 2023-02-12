import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const DetailsPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <header>
        <div className="header-content">
          <nav>
            <h1 className="home-icon back-home-icon">
              <Link to="/">
                <FaArrowLeft className="home-link-icon" />
              </Link>
            </h1>
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
          <div className="details-content last-details">
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
                <p className="flex">
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
                <p className="flex">
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
