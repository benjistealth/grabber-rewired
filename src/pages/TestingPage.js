import React, { useState } from "react";

function TestingPage() {
  const [isGlutenFree, setIsGlutenFree] = useState(true);
  const [isVegan, setIsVegan] = useState(true);
  const [isVegetarian, setIsVegetarian] = useState(true);
  const recipesJSON = JSON.parse(localStorage.getItem("recipe-results"));

  const [recipeArrayGF, setRecipeArraGF] = useState([]);
  const [recipeArrayV, setRecipeArrayV] = useState([]);
  const [recipeArrayVEG, setRecipeArrayVEG] = useState([]);
  
  function handleGlutenFreeCheck() {
    isGlutenFree === false ? setIsGlutenFree(true) : setIsGlutenFree(false);
    recipesJSON.forEach((recipe) => {
      if (recipe.glutenFree === isGlutenFree) {
        const filteredRecipes = recipesJSON.filter(
          (recipe) => recipe.glutenFree === isGlutenFree
        );
        setRecipeArraGF([...recipeArrayGF, filteredRecipes]);
      }
      if (isGlutenFree === false) {
        setRecipeArraGF([]);
      }
    });
  }

  function handleVeganCheck() {
    isVegan === false ? setIsVegan(true) : setIsVegan(false);
    recipesJSON.forEach((recipe) => {
      if (recipe.vegan === isVegan) {
        const filteredRecipes = recipesJSON.filter(
          (recipe) => recipe.vegan === isVegan
        );
        setRecipeArrayV([...recipeArrayV, filteredRecipes]);
      }
      if (isVegan === false) {
        setRecipeArrayV([]);
      }
    })
  }

  function handleVegetarianCheck() {
    isVegetarian === false ? setIsVegetarian(true) : setIsVegetarian(false);
    recipesJSON.forEach((recipe) => {
      if (recipe.vegetarian === isVegetarian) {
        const filteredRecipes = recipesJSON.filter(
          (recipe) => recipe.vegetarian === isVegetarian
        );
        setRecipeArrayVEG([...recipeArrayVEG, filteredRecipes]);
      }
      if (isVegetarian === false) {
        setRecipeArrayVEG([]);
      }
    })
  }

  return (
    <div>
      <h1>GLUTEN FREE | VEGAN | VEGETARIAN</h1>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="gluten-free-checkbox"
          onClick={handleGlutenFreeCheck}
        />
        <label className="form-check-label" htmlFor="gluten-free-checkbox">
          Gluten Free
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="vegan-checkbox"
          onClick={handleVeganCheck}
        />
        <label className="form-check-label" htmlFor="vegan-checkbox">
          Vegan
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="vegetarian-checkbox"
          onClick={handleVegetarianCheck}
        />
        <label className="form-check-label" htmlFor="vegetarian-checkbox">
          Vegetarian
        </label>
      </div>
      <ul>
        {recipeArrayGF.map((recipes, index) => (
          <li key={index}>
            <ul>
              {recipes.map((recipe, recipeIndex) => (
                <li key={recipeIndex}>{recipe.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <ul>
        {recipeArrayV.map((recipes, index) => (
          <li key={index}>
            <ul>
              {recipes.map((recipe, recipeIndex) => (
                <li key={recipeIndex}>{recipe.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <ul>
        {recipeArrayVEG.map((recipes, index) => (
          <li key={index}>
            <ul>
              {recipes.map((recipe, recipeIndex) => (
                <li key={recipeIndex}>{recipe.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}

export default TestingPage;
