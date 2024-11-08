// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import AuthContext for user info
import './navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for logout confirmation modal
  const location = useLocation();
  const navigate = useNavigate();
  const logo = `${process.env.PUBLIC_URL}/image/logo.jpg`;

  // Toggle submenu visibility
  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev);
  };

  // Show the logout confirmation modal
  const handleLogoutClick = () => {
    setShowLogoutModal(true); // Open the modal
  };

  // Handle the actual logout and close modal
  const confirmLogout = () => {
    logout();
    setSubMenuOpen(false);
    setShowLogoutModal(false); // Close the modal
    navigate('/'); // Redirect to homepage
  };

  // Cancel logout action
  const cancelLogout = () => {
    setShowLogoutModal(false); // Close the modal without logging out
  };

  useEffect(() => {
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
              <li className="navbar-nav-item navbar-login">
                {currentUser ? (
                  <div className="navbar-user" onClick={toggleSubMenu} aria-haspopup="true" aria-expanded={isSubMenuOpen}>
                    <span className="navbar-welcome-text">Welcome, {currentUser.email}</span>
                    <span className="navbar-dropdown-indicator"> ▼</span>
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="navbar-nav-link">Login</Link>
                    <Link to="/create-account" className="navbar-nav-link">Create Account</Link>
                  </>
                )}
                {isSubMenuOpen && currentUser && (
                  <ul className="navbar-submenu">
                    <li className="navbar-submenu-item">
                      <Link to="/View-My-Details" className="navbar-submenu-link">View My Details</Link>
                    </li>
                    <li className="navbar-submenu-item">
                      <Link to="/update-account" className="navbar-submenu-link">Update Account</Link>
                    </li>
                    {currentUser.role === 'admin' && (
                      <li className="navbar-submenu-item">
                        <Link to="/admin-dashboard" className="navbar-submenu-link">Admin Dashboard</Link>
                      </li>
                    )}
                    <li className="navbar-submenu-item">
                      <button className="navbar-submenu-link" onClick={handleLogoutClick}>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <p>Are you sure you want to logout?</p>
            <button onClick={confirmLogout} className="logout-confirm-button">Yes</button>
            <button onClick={cancelLogout} className="logout-cancel-button">No</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
