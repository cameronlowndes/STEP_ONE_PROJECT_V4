import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure this path is correct

const Navbar = () => {
  const logo = `${process.env.PUBLIC_URL}/image/logo.jpg`; // Path to your logo

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="NovaMart Logo" className="navbar-logo-image" />
        </div>

        {/* Title and Nav Section */}
        <div className="navbar-title-container">
          <h1 className="navbar-title">NovaMart</h1>
          <nav>
            <ul className="navbar-nav-links">
              <li className="navbar-nav-item">
                <Link to="/" className="navbar-nav-link">Home</Link>
              </li>
              <li className="navbar-nav-item">
                <Link to="/shop" className="navbar-nav-link">Shop</Link>
              </li>
              <li className="navbar-nav-item">
                <Link to="/about" className="navbar-nav-link">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
