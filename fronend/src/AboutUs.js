import React from 'react';
import Footer from './Footer';
import { FaGamepad, FaHeadset, FaStar, FaUsers } from 'react-icons/fa'; // Importing icons from react-icons

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg pt-20">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">Welcome to NovaMart</h2>
        
        <p className="mb-4 text-lg">
        Welcome to NovaMart, the ultimate online shopping haven for gamers on the hunt for unbeatable deals! 
        Our mission is to provide an extensive selection of video games and gaming gear tailored for all platforms, including PC, Xbox, and PlayStation. 
        Whether you’re a casual gamer eager to discover new adventures or a dedicated player seeking the latest blockbuster releases, 
        NovaMart is your go-to destination for everything gaming. Dive into our vast library and elevate your gaming experience to new heights!
        </p>

        {/* More Information */}
        <p className="mb-4 text-lg">
        At NovaMart, we understand that gaming is not just a hobby; it’s a lifestyle. That’s why we meticulously 
        curate a diverse collection that features both beloved classics and the latest blockbuster releases. 
        Our competitive prices ensure that you can expand your gaming library without stretching your budget.
         Whether you’re hunting for indie gems or major titles, we have something to satisfy every gamer’s appetite, making it easier than ever to embark on your next gaming adventure.
        </p>
        <p className="mb-4 text-lg">
        At NovaMart, our top priority is your satisfaction. Our dedicated team is always on hand to assist with any questions or concerns, 
        ensuring that your shopping experience is seamless and enjoyable. Join the NovaMart community and discover 
        why gamers trust us for high-quality products at unbeatable prices. Your ultimate gaming journey starts here!
        </p>
        
        {/* Icon Section moved to the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <FaGamepad className="text-4xl text-blue-600 mb-2" />
            <h3 className="text-lg font-bold">Wide Selection</h3>
            <p className="text-center">Explore our vast library of games across all platforms.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <FaHeadset className="text-4xl text-blue-600 mb-2" />
            <h3 className="text-lg font-bold">Quality Accessories</h3>
            <p className="text-center">Enhance your gaming experience with top-notch gear.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <FaStar className="text-4xl text-blue-600 mb-2" />
            <h3 className="text-lg font-bold">Customer Satisfaction</h3>
            <p className="text-center">We prioritize your needs to make your shopping enjoyable.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <FaUsers className="text-4xl text-blue-600 mb-2" />
            <h3 className="text-lg font-bold">Join Our Community</h3>
            <p className="text-center">Connect with fellow gamers and share your passion.</p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-6">
          <a href="/shop" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
            Shop Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
