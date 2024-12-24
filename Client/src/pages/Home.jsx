// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div className="relative min-h-screen bg-cover bg-center bg-black">
    {/* Navbar */}
    <nav className="flex justify-between items-center p-6 bg-slate-100 bg-opacity-80 shadow-lg">
      <div className="text-3xl font-extrabold text-blue-700">EpicureanEcho</div>
      <div className="space-x-4">
        <Link to="/aboutus" className="text-blue-700 hover:text-gray-800 font-bold">
          About Us
        </Link>
        <Link to="/search" className="text-blue-700 hover:text-gray-800 font-bold">
          Explore
        </Link>
      </div>
    </nav>

    {/* Main Content */}
    <div className="flex flex-col items-center justify-center h-full text-center text-white p-8  bg-opacity-50">
      <h1 className="text-7xl font-bold mb-6 mt-24 text-blue-700">Welcome to Recipe Finder</h1>
      <p className="text-3xl mb-10 max-w-xl text-white">
        Discover delicious recipes from around the world. Find something new to cook, explore different cuisines, and make every meal an adventure!
      </p>
      <Link to="/search" className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold">
        Find a Recipe
      </Link>
    </div>
  </div>
);

export default Home;
