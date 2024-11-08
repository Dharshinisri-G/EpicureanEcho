// src/pages/RecipeDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Spaghetti from '../assets/img/Spaghetti Sauce {Easy Recipe Authentic Taste} - Cooking Classy.jfif'
import Burger from '../assets/img/crack burgers -.jfif';
import Tacos from '../assets/img/Crispy Chipotle Sweet Potato Tacos with Lime Crema_.jfif';
import Pancakes from '../assets/img/Early Sunrise Pancakes [30 Minutes].jfif';
import PadThai from '../assets/img/Easy Pad Thai with a Peanut Sauce.jfif';
import Pizza from '../assets/img/Flat lay with italian pizza containing pizza, flat, and lay.jfif';
import Salad from '../assets/img/Indian Kachumber Salad.jfif';
import Lasagna from '../assets/img/Nugget Markets Beef  Lasagna Recipe.jfif';
import Sushi from '../assets/img/Professional Photography image of delicious Sushi Food in vibrant colors digital art style _ Premium AI-generated image.jfif';

const RecipeDetails = () => {
  const { id } = useParams();
  
  const mockRecipe = {
    1: { 
      name: 'Spaghetti', 
      description: 'Classic Italian pasta.', 
      ingredients: ['Pasta', 'Tomato sauce', 'Cheese'], 
      image: Spaghetti,
      procedure: [
        'Boil pasta according to package instructions.',
        'Heat tomato sauce in a saucepan.',
        'Serve pasta topped with tomato sauce and cheese.'
      ]
    },
    2: { 
      name: 'Pizza', 
      description: 'Cheesy and delicious.', 
      ingredients: ['Dough', 'Tomato sauce', 'Cheese', 'Toppings'], 
      image: Pizza,
      procedure: [
        'Preheat oven to 200°C (400°F).',
        'Roll out dough and spread tomato sauce on it.',
        'Add cheese and desired toppings.',
        'Bake for 15-20 minutes or until crust is golden brown.'
      ]
    },
    3: { 
      name: 'Salad', 
      description: 'Healthy green salad.', 
      ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Dressing'], 
      image: Salad,
      procedure: [
        'Wash and chop lettuce, tomato, and cucumber.',
        'Place ingredients in a large bowl.',
        'Add dressing and toss to combine.'
      ]
    },
    4: { 
      name: 'Burger', 
      description: 'Juicy beef patty with cheese.', 
      ingredients: ['Beef patty', 'Cheese', 'Lettuce', 'Tomato', 'Bun'], 
      image: Burger,
      procedure: [
        'Grill or pan-fry the beef patty until cooked to desired doneness.',
        'Place patty on bun and add cheese, lettuce, and tomato.',
        'Serve with condiments as desired.'
      ]
    },
    5: { 
      name: 'Tacos', 
      description: 'Mexican tortillas with fillings.', 
      ingredients: ['Tortillas', 'Seasoned meat', 'Lettuce', 'Cheese', 'Salsa'], 
      image: Tacos,
      procedure: [
        'Cook seasoned meat in a skillet until fully cooked.',
        'Warm tortillas in a pan or microwave.',
        'Add meat, lettuce, cheese, and salsa to each tortilla.',
        'Fold and serve.'
      ]
    },
    6: { 
      name: 'Sushi', 
      description: 'Traditional Japanese sushi rolls.', 
      ingredients: ['Rice', 'Seaweed', 'Fish', 'Vegetables'], 
      image: Sushi,
      procedure: [
        'Cook rice and allow it to cool.',
        'Place seaweed on a bamboo mat and spread rice over it.',
        'Add fish and vegetables in a row along one edge.',
        'Roll tightly and slice into pieces.'
      ]
    },
    7: { 
      name: 'Pancakes', 
      description: 'Fluffy breakfast pancakes.', 
      ingredients: ['Flour', 'Eggs', 'Milk', 'Syrup', 'Butter'], 
      image: Pancakes,
      procedure: [
        'Mix flour, eggs, and milk to make a batter.',
        'Pour batter onto a heated, greased griddle.',
        'Cook until bubbles form, then flip and cook until golden brown.',
        'Serve with syrup and butter.'
      ]
    },
    8: { 
      name: 'Lasagna', 
      description: 'Layered pasta with cheese and meat.', 
      ingredients: ['Pasta sheets', 'Tomato sauce', 'Ground meat', 'Cheese'], 
      image: Lasagna,
      procedure: [
        'Preheat oven to 180°C (350°F).',
        'Cook ground meat in a pan with tomato sauce.',
        'Layer pasta, meat sauce, and cheese in a baking dish.',
        'Bake for 30-40 minutes or until cheese is melted and bubbly.'
      ]
    },
    9: { 
      name: 'Pad Thai', 
      description: 'Stir-fried Thai noodles.', 
      ingredients: ['Noodles', 'Shrimp', 'Peanuts', 'Egg', 'Sauce'], 
      image: PadThai,
      procedure: [
        'Soak noodles in warm water until soft.',
        'Stir-fry shrimp and egg in a hot pan.',
        'Add noodles and sauce, and stir-fry until combined.',
        'Garnish with peanuts and serve.'
      ]
    },
  };

  const recipe = mockRecipe[id];

  if (!recipe) {
    return <p className="text-gray-500 mt-4">Recipe not found.</p>;
  }

  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-4">
      <h2 className="text-4xl font-bold mb-2 text-white">{recipe.name}</h2>
      <p className="text-lg text-gray-300 italic mb-6 text-center max-w-2xl">{recipe.description}</p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 bg-slate-100 shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {/* Use the recipe image if it exists, otherwise fallback to BG2 */}
        <img 
          src={recipe.image || BG2} 
          alt={recipe.name} 
          className="w-full md:w-80 h-80 object-cover rounded-lg shadow-lg mb-6 md:mb-0" 
        />

        {/* Ingredients and Procedure on the right */}
        <div className="flex flex-col md:flex-row space-x-8">
          {/* Ingredients */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-2xl font-semibold text-black mb-4">Ingredients:</h3>
            <ul className="list-disc list-inside text-lg text-black">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-1">{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Procedure */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-2xl font-semibold text-black mb-4">Procedure:</h3>
            <ol className="list-decimal list-inside text-lg text-black">
              {recipe.procedure.map((step, index) => (
                <li key={index} className="mb-1">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <Link 
        to="/search" 
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Explore More Recipes
      </Link>
    </div>
  );
};

export default RecipeDetails;
