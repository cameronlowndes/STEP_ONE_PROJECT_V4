// src/ViewMyDetails.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewMyDetails = ({ currentAddresses, currentBankDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 mt-16 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Account Details</h2>

        <h3 className="text-lg font-semibold mb-2 text-gray-700">Home Address(es)</h3>
        {currentAddresses && currentAddresses.length > 0 ? (
          currentAddresses.map((address, index) => (
            <div key={index} className="space-y-2 mb-4">
              <p className="text-gray-600">Home Address: {address.homeAddress}</p>
              <p className="text-gray-600">City: {address.city}</p>
              <p className="text-gray-600">Country: {address.country}</p>
              <p className="text-gray-600">Postcode: {address.postcode}</p>
              <hr className="border-gray-300" /> {/* Separator line */}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No addresses available.</p>
        )}

        <h3 className="text-lg font-semibold mb-2 text-gray-700">Bank Details</h3>
        {currentBankDetails && currentBankDetails.length > 0 ? (
          currentBankDetails.map((bankDetail, index) => (
            <div key={index} className="space-y-2 mb-4">
              <p className="text-gray-600">Card Number: {bankDetail.cardNumber}</p>
              <p className="text-gray-600">Expiry Month: {bankDetail.expiryMonth}</p>
              <p className="text-gray-600">CVV: {bankDetail.cvv}</p>
              <hr className="border-gray-300" /> {/* Separator line */}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No bank details available.</p>
        )}

        <button 
          onClick={() => navigate('/update-account')} // Navigate to update account page
          className="mt-4 w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200">
          Update Your Details
        </button>
      </div>
    </div>
  );
};

export default ViewMyDetails;
