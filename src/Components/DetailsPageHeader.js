import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Header = () => (
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
);

export default Header;
