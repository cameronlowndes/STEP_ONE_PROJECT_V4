import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CommunityPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch featured discussions on component mount
  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/discussions'); // Adjust URL as needed
        setDiscussions(response.data);
      } catch (error) {
        console.error('Error fetching discussions:', error);
      }
    };

    fetchDiscussions();
  }, []);

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      setSuccessMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setErrorMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-8 pt-24"> 
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Welcome Section */}
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-4">Welcome to the Nova Shop Community!</h1>
        <p className="text-center text-gray-600 mb-8">
          Connect with other Nova Shop users, share your experiences, and stay updated with the latest news!
        </p>

        {/* Featured Community Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Featured Discussions</h2>
          <ul className="space-y-4">
            {discussions.length > 0 ? (
              discussions.map(discussion => (
                <li key={discussion.id} className="p-4 border-b border-gray-200 hover:bg-indigo-50 transition duration-300">
                  <Link to={`/discussion/${discussion.id}`} className="text-lg font-medium text-indigo-600 hover:underline">
                    {discussion.title}
                  </Link>
                  <p className="text-sm text-gray-500">Posted by <span className="font-semibold">{discussion.author}</span> | {discussion.created_at}</p>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No discussions available.</p>
            )}
          </ul>
        </section>

        {/* Community Forum Link */}
        <div className="bg-indigo-100 p-6 rounded-lg mb-10 text-center">
          <h2 className="text-2xl font-semibold text-indigo-800">Join the Conversation</h2>
          <p className="text-gray-700 mb-4">Visit our community forum to start your own discussion or join existing ones.</p>
          <Link to="/forum" className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-700 transition duration-300">
            Go to Forum
          </Link>
        </div>

        {/* Newsletter Signup Section */}
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-4">Sign up for our newsletter to get the latest updates, offers, and news from Nova Shop!</p>
          <form className="flex justify-center" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-2/3 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition duration-300">
              Subscribe
            </button>
          </form>
          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
