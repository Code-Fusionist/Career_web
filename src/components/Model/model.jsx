// src/components/Home/home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MyApp</h1>
      <p className="text-lg text-gray-600">
        This is the Model page of MyApp. Here, you can find information about our services and the latest updates.
      </p>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;