// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active link
import { useAuth } from './AuthContext'; // Import the custom hook
import './navbar.css'; // Ensure this path is correct

const Navbar = () => {
  const { currentUser, logout } = useAuth(); // Get currentUser and logout function from context
  const [isSubMenuOpen, setSubMenuOpen] = useState(false); // State for submenu visibility
  const location = useLocation(); // Get current location for active links
  const logo = `${process.env.PUBLIC_URL}/image/logo.jpg`; // Path to your logo

  // Function to toggle the submenu visibility
  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev);
  };

  // Update the logout function to close the submenu
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout(); // Call the logout function
      setSubMenuOpen(false); // Close the submenu
    }
  };

  useEffect(() => {
    // Close the submenu if the user logs out
    if (!currentUser) {
      setSubMenuOpen(false);
    }
  }, [currentUser]);

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
                <Link to="/" className={`navbar-nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
              </li>
              <li className="navbar-nav-item">
                <Link to="/shop" className={`navbar-nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>Shop</Link>
              </li>
              <li className="navbar-nav-item">
                <Link to="/about" className={`navbar-nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
              </li>
              <li className="navbar-nav-item">
                <Link to="/CommunityPage" className={`navbar-nav-link ${location.pathname === '/CommunityPage' ? 'active' : ''}`}>Community Page</Link>
              </li>
              {/* Show username or login links */}
              <li className="navbar-nav-item navbar-login">
                {currentUser ? (
                  <div
                    className="navbar-user"
                    onClick={toggleSubMenu}
                    aria-haspopup="true" // Indicates that a popup is triggered
                    aria-expanded={isSubMenuOpen} // Indicates the state of the submenu
                  >
                    {/* Welcome message with highlighted username */}
                    <span className="navbar-welcome-text">Welcome, </span>
                    <span className="navbar-username">{currentUser.username}</span>
                    <span className="navbar-dropdown-indicator"> ▼</span> {/* Indicator for dropdown */}
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="navbar-nav-link">Login</Link>
                    <Link to="/create-account" className="navbar-nav-link">Create Account</Link>
                  </>
                )}
                {/* Submenu for logged-in users */}
                {isSubMenuOpen && currentUser && (
                  <ul className="navbar-submenu">
                    <li className="navbar-submenu-item">
                      <Link to="/View-My-Details" className="navbar-submenu-link">View My Details</Link>
                    </li>
                    <li className="navbar-submenu-item">
                      <Link to="/update-account" className="navbar-submenu-link">Update Account</Link>
                    </li>
                    {currentUser.role === 'admin' && ( // Check if user is an admin
                      <li className="navbar-submenu-item">
                        <Link to="/admin-dashboard" className="navbar-submenu-link">Admin Dashboard</Link>
                      </li>
                    )}
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
