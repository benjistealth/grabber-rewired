import React from "react";
import { useNavigate } from 'react-router-dom';
import "./RecipePage.css";

function RecipePageGuest() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  const recipeSteps = individualRecipe.analyzedInstructions[0].steps;
  const ingredients = individualRecipe.extendedIngredients;
  
  const GoBack = () => {
    navigate("/RecipeSearchGuest");
  }

  return (
    <div className="maincontainer">
      <button className="btn btn-recipe" onClick={GoBack}>
        Go Back
      </button>
      <br />
      <br />
      <div className="recipe" id="printRecipe">
        <div className="container infocontainer">
          <div className="col-lg-8 col-md-6 col-sm-5 ms-3 mt-5 mb-5 instructionscontainer">
            <h1 className="titleHeader">Instructions</h1>
            {recipeSteps.map((recipeStep, index) => (
              <p className="instructions mt-2" key={index}>{`${index + 1}.)  ${
                recipeStep.step
              }`}</p>
            ))}
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 ms-5 mt-5 mb-5 ingredientscontainer">
            <h1 className="titleHeader">Ingredients</h1>
            {ingredients.map((ingredient, index) => (
              <p className="ingredients mt-2" key={index}>{`${index + 1}.) ${
                ingredient.amount
              } ${ingredient.unit} ${ingredient.name}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePageGuest;