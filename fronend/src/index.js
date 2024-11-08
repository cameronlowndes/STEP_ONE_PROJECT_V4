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
import { AuthProvider } from './AuthContext'; // Import AuthProvider

// ProtectedRoute component to secure routes
import ProtectedRoute from './ProtectedRoute';

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
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<NovaMart />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/forum" element={<ForumPage />} />
        {/* Protected routes */}
        <Route path="/update-account" element={<ProtectedRoute><UpdateAccount /></ProtectedRoute>} />
        <Route path="/view-my-details" element={<ProtectedRoute><ViewMyDetails /></ProtectedRoute>} />
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
