import React from 'react';
import Footer from './Footer'; // Ensure you import the Footer component

const Checkout = ({ handleSubmit }) => {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
            {/* Main content area */}
            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center bg-white rounded-lg shadow-lg mt-8"> {/* Increased mt-8 for more spacing */}
                <h1 className="text-2xl font-bold text-black mb-20">Checkout</h1> {/* Set text color to black */}
                <div className="w-full max-w-md">
                    <form id="checkout-form" className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name:</label>
                            <input type="text" id="name" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input type="email" id="email" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address:</label>
                            <input type="text" id="street-address" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="Street Address" />
                            <input type="text" id="city" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="City" />
                            <input type="text" id="state" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="County" />
                            <input type="text" id="zip" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="Post Code" />
                        </div>
                        <div>
                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number:</label>
                            <input type="tel" id="card-number" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="Enter your card number" />
                        </div>
                        <div className="flex space-x-2">
                            <div className="w-1/2">
                                <label htmlFor="expiry-month" className="block text-sm font-medium text-gray-700">Expiry Month:</label>
                                <input type="text" id="expiry-month" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="MM" />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="expiry-year" className="block text-sm font-medium text-gray-700">Expiry Year:</label>
                                <input type="text" id="expiry-year" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="YY" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
                            <input type="tel" id="cvv" required className="mt-1 border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-500" placeholder="Enter CVV" />
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition duration-200">Submit</button>
                    </form>
                </div>
            </main>
            <Footer /> {/* Ensure the Footer is placed below the main content */}
        </div>
    );
};

export default Checkout;
