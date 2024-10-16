import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar'; 
import NovaMart from './NovaMart'; 
import AboutUs from './AboutUs'; 
import ShopPage from './ShopPage'; 
import Checkout from './Checkout';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NovaMart />} />
        <Route path="/shop" element={<ShopPage />} /> {/* Shop Page route */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout route */}
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
