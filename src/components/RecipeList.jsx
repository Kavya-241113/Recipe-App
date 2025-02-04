
import React from 'react';
import { db, ref, remove } from '../firebase'; 

import { Button } from 'react-bootstrap';

function RecipeList({ recipes }) {
  const handleDelete = (id) => {
    const recipeRef = ref(db, 'recipes/' + id); 
    remove(recipeRef)  
      .catch((error) => {
        console.error("Error deleting recipe: ", error);
      });
  };

  return (
    <ul className="list-group">
      {recipes.map((recipe) => (
        <li key={recipe.id} className="list-group-item">
          <h3>{recipe.title}</h3>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Steps: {recipe.steps}</p>
          <Button variant="danger" onClick={() => handleDelete(recipe.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
