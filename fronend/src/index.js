// src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar'; 
import NovaMart from './NovaMart'; 
import AboutUs from './AboutUs'; 
import ShopPage from './ShopPage'; 
import Checkout from './Checkout';
import Login from './Login'; 
import CreateAccount from './CreateAccount'; 
import UpdateAccount from './UpdateAccount'; 
import ViewMyDetails from './ViewMyDetails'; 
import CommunityPage from './CommunityPage'; 
import ForumPage from './Forum';
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthProvider and useAuth

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
};

const Main = () => {
  const { user, logout } = useAuth(); // Access user and logout from AuthContext

  return (
    <>
      <Navbar username={user ? user.username : ''} onLogout={logout} />
      <Routes>
        <Route path="/" element={<NovaMart />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/login" element={<Login onLogin={logout} />} /> {/* Pass any necessary props */}
        <Route path="/create-account" element={<CreateAccount onLogin={logout} />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route 
          path="/update-account" 
          element={<UpdateAccount />} 
        />
        <Route path="/view-my-details" element={<ViewMyDetails />} />
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
