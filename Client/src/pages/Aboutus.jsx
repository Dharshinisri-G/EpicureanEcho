// src/pages/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-6">
      <h1 className="text-4xl font-bold text-white mt-10">About EpicureanEcho</h1>
      
      <p className="text-lg text-slate-100 mt-4 max-w-2xl text-center">
        EpicureanEcho is your one-stop app for discovering delicious recipes from around the world.
        Whether you're craving Italian pasta, Mexican tacos, or Japanese sushi, we provide a range of
        recipes to suit all tastes and skill levels. Each recipe includes easy-to-follow instructions,
        ingredient lists, and beautiful images to guide you in creating your next culinary masterpiece.
      </p>
      
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-lg text-slate-100">
          We believe cooking should be enjoyable, accessible, and rewarding. Our goal is to empower everyone,
          from beginners to experts, with a collection of recipes that inspire creativity in the kitchen.
        </p>
      </div>
      
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Meet the Team</h2>
        <p className="text-lg text-slate-100">
        EpicureanEcho was created by a group of food enthusiasts and developers who share a passion for
          making cooking accessible to all. We strive to bring you the best recipes and a seamless user
          experience, helping you make every meal memorable.
        </p>
      </div>
      
      <div className="mt-10">
        <p className="text-slate-100">Thank you for using EpicureanEcho. Happy cooking!</p>
      </div>
    </div>
  );
};

export default AboutUs;
