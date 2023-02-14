import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Header = () => (
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
);

export default Header;
