// src/RecipeContext.js

import React, { createContext, useState } from 'react';

// Create the RecipeContext
const RecipeContext = createContext();

// Define the RecipeProvider component
const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([
        // Sample data
        { id: 1, name: 'Pasta', ingredients: ['tomato', 'basil', 'garlic'], cuisine: 'Italian' },
        { id: 2, name: 'Sushi', ingredients: ['rice', 'fish', 'seaweed'], cuisine: 'Japanese' },
        // Add more recipes as needed
    ]);

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
};
export { RecipeContext, RecipeProvider };
