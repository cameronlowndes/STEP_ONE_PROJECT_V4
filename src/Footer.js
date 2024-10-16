import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white  mt-auto">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-lg font-semibold ">&copy; {new Date().getFullYear()} NovaMart. All rights reserved.</p>
                
                <div className="mt-4">
                    <Link to="/about" className="hover:text-gray-300 transition-colors text-lg">
                        About Us
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
