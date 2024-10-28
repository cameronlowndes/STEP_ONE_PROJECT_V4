import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerStyle = {
        background: 'linear-gradient(to right, #6b46c1, #5a67d8)', // Gradient background
        color: 'white', // Text color
        textAlign: 'center', // Center text
        padding: '1rem', // Padding
        marginTop: 'auto', // Ensures footer stays at the bottom
    };

    return (
        <footer style={footerStyle}>
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-lg font-semibold">
                    &copy; {new Date().getFullYear()} NovaMart. All rights reserved.
                </p>
                
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
