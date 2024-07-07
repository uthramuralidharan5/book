import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Book Hub</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="social-media">
        <FaGoogle size={24} />
        <FaTwitter size={24} />
        <FaInstagram size={24} />
        <FaYoutube size={24} />
      </div>
    </header>
  );
}

export default Header;