// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure this path is correct

const Navbar = ({ username, onLogout }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false); // State for submenu visibility
  const logo = `${process.env.PUBLIC_URL}/image/logo.jpg`; // Path to your logo

  // Function to toggle the submenu visibility
  const toggleSubMenu = () => {
    console.log("Toggling submenu"); // Debugging log
    setSubMenuOpen((prev) => !prev);
  };

  // Update the logout function to close the submenu
  const handleLogout = () => {
    onLogout(); // Call the logout function
    setSubMenuOpen(false); // Close the submenu
  };

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
              {/* Show username or login links */}
              <li className="navbar-nav-item navbar-login">
                {username ? (
                  <div
                    className="navbar-user"
                    onClick={toggleSubMenu}
                    aria-haspopup="true" // Indicates that a popup is triggered
                    aria-expanded={isSubMenuOpen} // Indicates the state of the submenu
                  >
                    {username}
                    <span className="navbar-dropdown-indicator"> ▼</span> {/* Indicator for dropdown */}
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="navbar-nav-link">Login</Link>
                    <Link to="/create-account" className="navbar-nav-link">Create Account</Link>
                  </>
                )}
                {/* Submenu for logged-in users */}
                {isSubMenuOpen && (
                  <ul className="navbar-submenu">
                    <li className="navbar-submenu-item">
                      <Link to="/View-My-Details" className="navbar-submenu-link">View My Details</Link>
                    </li>
                    <li className="navbar-submenu-item">
                      <Link to="/update-account" className="navbar-submenu-link">Update Account</Link>
                    </li>
                    <li className="navbar-submenu-item">
                      <span
                        className="navbar-submenu-link cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </span>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
