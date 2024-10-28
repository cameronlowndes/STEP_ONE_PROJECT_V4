// src/UpdateAccount.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateAccount = ({ currentAddresses, currentBankDetails, onUpdate }) => {
  const [addresses, setAddresses] = useState(currentAddresses || [{ homeAddress: '', city: '', country: '', postcode: '' }]);
  const [bankDetails, setBankDetails] = useState(currentBankDetails || [{ cardNumber: '', expiryMonth: '', cvv: '' }]);
  const navigate = useNavigate();

  // Handle address changes
  const handleAddressChange = (index, field, value) => {
    const newAddresses = [...addresses];
    newAddresses[index][field] = value;
    setAddresses(newAddresses);
  };

  // Add a new address
  const addAddress = () => {
    setAddresses([...addresses, { homeAddress: '', city: '', country: '', postcode: '' }]);
  };

  // Handle bank detail changes
  const handleBankDetailChange = (index, field, value) => {
    const newBankDetails = [...bankDetails];
    newBankDetails[index][field] = value;
    setBankDetails(newBankDetails);
  };

  // Add a new bank detail
  const addBankDetail = () => {
    setBankDetails([...bankDetails, { cardNumber: '', expiryMonth: '', cvv: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the update logic,
    // such as sending the data to your server or API.
    onUpdate(addresses, bankDetails); // Simulate update
    navigate('/'); // Redirect to the home page or another page after update
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Centering the content */}
      <div className="max-w-md mx-auto p-6 mt-16 bg-white rounded-lg shadow-lg border border-gray-300"> {/* Enhanced box styles */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Update Your Account Details</h2> {/* Increased heading size */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Home Address</h3>
          {addresses.map((address, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                placeholder={`Home Address ${index + 1}`}
                value={address.homeAddress}
                onChange={(e) => handleAddressChange(index, 'homeAddress', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced input styles
              />
              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) => handleAddressChange(index, 'city', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced input styles
              />
              <input
                type="text"
                placeholder="Country"
                value={address.country}
                onChange={(e) => handleAddressChange(index, 'country', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced input styles
              />
              <input
                type="text"
                placeholder="Postcode"
                value={address.postcode}
                onChange={(e) => handleAddressChange(index, 'postcode', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced input styles
              />
            </div>
          ))}
          <button type="button" onClick={addAddress} className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-200"> {/* Added hover effect */}
            Add Another Address
          </button>

          <h3 className="text-lg font-semibold mb-2 text-gray-700">Bank Details</h3>
          {bankDetails.map((bankDetail, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                placeholder={`Card Number ${index + 1}`}
                value={bankDetail.cardNumber}
                onChange={(e) => handleBankDetailChange(index, 'cardNumber', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced input styles
              />
              <input
                type="text"
                placeholder="Expiry Month (MM)"
                value={bankDetail.expiryMonth}
                onChange={(e) => handleBankDetailChange(index, 'expiryMonth', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced input styles
              />
              <input
                type="text"
                placeholder="CVV"
                value={bankDetail.cvv}
                onChange={(e) => handleBankDetailChange(index, 'cvv', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced input styles
              />
            </div>
          ))}
          <button type="button" onClick={addBankDetail} className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-200"> {/* Added hover effect */}
            Add Another Bank Detail
          </button>

          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"> {/* Added hover effect */}
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccount;
