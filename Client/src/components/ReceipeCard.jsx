// src/components/RecipeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
    <p className="text-gray-600">{recipe.description}</p>
    <Link
      to={`/recipe/${recipe.id}`}
      className="mt-2 inline-block text-blue-500 hover:text-blue-700"
    >
      View Details
    </Link>
  </div>
);

export default RecipeCard;
