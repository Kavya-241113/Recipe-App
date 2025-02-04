
import React, { useState, useEffect } from 'react';
import { db, ref, get } from '../src/firebase.js'; 
import RecipeList from './components/RecipeList.jsx';
import RecipeForm from './components/RecipeForm.jsx';
import SearchBar from './components/SearchBar.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    console.log("db object:", db);
    
    const recipesRef = ref(db, 'recipes');
    const fetchRecipes = async () => {
      try {
        const snapshot = await get(recipesRef); 
        const recipeData = snapshot.val();

        if (recipeData) {
          const recipeList = Object.keys(recipeData).map(key => ({
            id: key,
            ...recipeData[key],
          }));
          setRecipes(recipeList);
        } else {
          setRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();

    
    return () => {
      
    };
  }, []);
  return (
    <div className="container mt-4">
      <h1>Recipe App</h1>
      <SearchBar setSearchTerm={setSearchTerm} /> 
      <RecipeForm />
      <RecipeList recipes={recipes} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
