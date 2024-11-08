// src/pages/Search.jsx
import React, { useState } from 'react';
import RecipeList from '../components/ReceipeList.jsx';

const Search = () => {
  const mockRecipes = [
    { id: 1, name: 'Spaghetti', description: 'Classic Italian pasta.' },
    { id: 2, name: 'Pizza', description: 'Cheesy and delicious.' },
    { id: 3, name: 'Salad', description: 'Healthy green salad.' },
    { id: 4, name: 'Burger', description: 'Juicy beef patty with cheese.' },
    { id: 5, name: 'Tacos', description: 'Mexican tortillas with fillings.' },
    { id: 6, name: 'Sushi', description: 'Traditional Japanese sushi rolls.' },
    { id: 7, name: 'Pancakes', description: 'Fluffy breakfast pancakes.' },
    { id: 8, name: 'Lasagna', description: 'Layered pasta with cheese and meat.' },
    { id: 9, name: 'Pad Thai', description: 'Stir-fried Thai noodles.' },
    
  ];

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState(mockRecipes); // Initialize with mockRecipes

  const handleSearch = () => {
    const filteredRecipes = mockRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setRecipes(filteredRecipes);
  };

  // Call handleSearch automatically whenever query changes
  React.useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-6">
      <h2 className="text-3xl font-semibold mb-6 text-white">Search for a Recipe</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter recipe name"
          className="px-4 py-2 border w-96 border-gray-300 rounded-md focus:outline-none"
        />
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Search;
