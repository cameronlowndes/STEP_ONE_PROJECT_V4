import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Footer from './Footer';

const ForumPage = () => {
  const [showInput, setShowInput] = useState(false);
  const [topic, setTopic] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([
    { id: 1, name: "General Discussions", createdBy: "user1" },
    { id: 2, name: "Product Reviews", createdBy: "user2" },
    { id: 3, name: "Technical Support", createdBy: "admin" },
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  
  const { currentUser, isAdmin } = useAuth(); // Use AuthContext

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Topic Submitted:", topic, "Category:", selectedCategory);
    setTopic('');
    setSelectedCategory('');
    setShowInput(false);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      setCategories([...categories, { id: categories.length + 1, name: newCategory, createdBy: currentUser }]);
      setNewCategory('');
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleDeleteCategory = (categoryId) => {
    setCategories(categories.filter(category => category.id !== categoryId));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 pt-24">
      <div style={{ flexGrow: 1, paddingTop: '100px' }} className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Nova Shop Forum</h1>
<p className="text-center text-gray-600 mb-10"> {/* Increased margin bottom */}
  Join the conversation and share your thoughts with the Nova Shop community!
</p>


        {/* Forum Categories */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Forum Categories</h2>
          <ul className="space-y-4">
            {categories.map(category => (
              <li key={category.id} className="p-4 border-b border-gray-200 hover:bg-indigo-50 transition duration-300">
                <button 
                  onClick={() => handleCategoryClick(category.id)}
                  className="text-lg font-medium text-indigo-600 hover:underline focus:outline-none"
                >
                  {category.name}
                </button>
                <p className="text-sm text-gray-500">Discuss topics related to {category.name}.</p>

                {/* Details for active category */}
                {activeCategory === category.id && (
                  <div className="mt-2 p-2 border border-gray-300 rounded bg-gray-50">
                    <h3 className="font-semibold text-indigo-700">Discussions in {category.name}</h3>
                    {/* Here you can add more details or subtopics related to the category */}
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600">- Topic 1 related to {category.name}</li>
                      <li className="text-sm text-gray-600">- Topic 2 related to {category.name}</li>
                      <li className="text-sm text-gray-600">- Topic 3 related to {category.name}</li>
                    </ul>
                  </div>
                )}

                {/* Delete Button */}
                {(category.createdBy === currentUser || isAdmin) && (
                  <button 
                    onClick={() => handleDeleteCategory(category.id)} 
                    className="mt-2 text-red-600 hover:underline focus:outline-none"
                  >
                    Delete Category
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Create New Topic Section */}
        <div className="bg-indigo-100 p-6 rounded-lg text-center mb-4">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Start a New Discussion</h2>
          <button
            onClick={() => setShowInput(!showInput)}
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-700 transition duration-300"
          >
            {showInput ? "Cancel" : "Create New Topic"}
          </button>
        </div>

        {/* Input Box for New Topic */}
        {showInput && (
          <form onSubmit={handleSubmit} className="mb-6">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 mb-2"
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={topic}
              onChange={handleInputChange}
              placeholder="Enter your topic..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 mb-2"
              required
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Submit
            </button>
          </form>
        )}

        {/* Add New Category Section */}
        <div className="bg-gray-100 p-6 rounded-lg mb-4 text-center">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Add New Category</h2>
          <form onSubmit={handleAddCategory}>
            <input
              type="text"
              value={newCategory}
              onChange={handleCategoryChange}
              placeholder="Enter new category name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 mb-2"
              required
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Add Category
            </button>
          </form>
        </div>
      </div>

      {/* Footer with full width */}
      <Footer style={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }} />
    </div>
  );
};

export default ForumPage;
