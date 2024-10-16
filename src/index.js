// src/App.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar'; 
import NovaMart from './NovaMart'; 
import AboutUs from './AboutUs'; 
import ShopPage from './ShopPage'; 
import Checkout from './Checkout';
import Login from './Login'; // Import Login component
import CreateAccount from './CreateAccount'; // Import CreateAccount component
import UpdateAccount from './UpdateAccount'; // Import UpdateAccount component
import ViewMyDetails from './ViewMyDetails'; // Import the ViewMyDetails component

const App = () => {
  const [username, setUsername] = useState(''); // State for logged-in username
  const [address, setAddress] = useState(''); // State for home address
  const [bankDetails, setBankDetails] = useState(''); // State for bank details

  const handleLogin = (username) => {
    setUsername(username); // Update the username state
  };

  const handleLogout = () => {
    setUsername(''); // Clear the username on logout
  };

  const handleUpdate = (newAddress, newBankDetails) => {
    setAddress(newAddress); // Update the home address state
    setBankDetails(newBankDetails); // Update the bank details state
  };

  return (
    <Router>
      <Navbar username={username} onLogout={handleLogout} /> {/* Pass username and logout handler to Navbar */}
      <Routes>
        <Route path="/" element={<NovaMart />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Corrected Login route */}
        <Route path="/create-account" element={<CreateAccount onLogin={handleLogin} />} /> {/* New route for CreateAccount */}
        <Route 
          path="/update-account" 
          element={
            <UpdateAccount 
              currentAddress={address} 
              currentBankDetails={bankDetails} 
              onUpdate={handleUpdate} 
            />
          } 
        /> {/* New route for updating account details */}
        <Route path="/View-My-Details" element={<ViewMyDetails />} /> {/* New route for View My Details */}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
