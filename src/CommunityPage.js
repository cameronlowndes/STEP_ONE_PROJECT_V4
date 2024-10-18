// src/components/Community.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CommunityPage = () => {
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
            <li className="p-4 border-b border-gray-200 hover:bg-indigo-50 transition duration-300">
              <Link to="/discussion/1" className="text-lg font-medium text-indigo-600 hover:underline">How to get the best deals on Nova Shop?</Link>
              <p className="text-sm text-gray-500">Posted by <span className="font-semibold">Alice Green</span> | 3 days ago</p>
            </li>
            <li className="p-4 border-b border-gray-200 hover:bg-indigo-50 transition duration-300">
              <Link to="/discussion/2" className="text-lg font-medium text-indigo-600 hover:underline">Nova Shop's Customer Service: Your Experiences</Link>
              <p className="text-sm text-gray-500">Posted by <span className="font-semibold">John Doe</span> | 1 week ago</p>
            </li>
            <li className="p-4 border-b border-gray-200 hover:bg-indigo-50 transition duration-300">
              <Link to="/discussion/3" className="text-lg font-medium text-indigo-600 hover:underline">Share Your Favorite Products from Nova Shop!</Link>
              <p className="text-sm text-gray-500">Posted by <span className="font-semibold">Jane Smith</span> | 2 weeks ago</p>
            </li>
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
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-2/3 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-indigo-200"
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
