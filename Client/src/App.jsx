// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import RecipeDetails from './pages/ReceipeDetails';
import Aboutus from './pages/Aboutus';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="aboutus" element={<Aboutus />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
