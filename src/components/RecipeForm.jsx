
import React, { useState } from 'react';
import { db, ref, set } from '../firebase'; 

import { Form, Button } from 'react-bootstrap';

function RecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title: title,
      ingredients: ingredients,
      steps: steps,
    };

    const newRecipeRef = ref(db, 'recipes/' + Date.now()); 
    set(newRecipeRef, newRecipe) 
      .then(() => {
        setTitle('');
        setIngredients('');
        setSteps('');
      })
      .catch((error) => {
        console.error("Error adding recipe: ", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formIngredients">
        <Form.Label>Ingredients:</Form.Label>
        <Form.Control as="textarea" rows={3} value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formSteps">
        <Form.Label>Steps:</Form.Label>
        <Form.Control as="textarea" rows={5} value={steps} onChange={(e) => setSteps(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit">Add Recipe</Button>
    </Form>
  );
}

export default RecipeForm;
