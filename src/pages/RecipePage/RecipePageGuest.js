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
      {/* <button className="btn btn-back" onClick={handleClick}>Nutrition</button> */}
      <button className="btn btn-back" onClick={GoBack}>
        Go Back
      </button>
      <br />
      <br />
      <div className="recipe" id="printRecipe">
        <h1 className="foodTitle">{individualRecipe.title}</h1>
        <br />
        <div className="imageContainer">
          <img
            src={individualRecipe.image}
            alt={individualRecipe.title}
            className="selectedImage"
          />
        </div>
        <div className="container infocontainer">
          <div className="col-md-6 ms-4 mt-5 mb-5 instructionscontainer">
            <h1 className="titleHeader">Instructions</h1>
            {recipeSteps.map((recipeStep, index) => (
              <p className="instructions mt-2" key={index}>{`${index + 1}.)  ${
                recipeStep.step
              }`}</p>
            ))}
          </div>
          <div className="col-md-3 ms-5 mt-5 mb-5 ingredientscontainer">
            <h1 className="titleHeader">Ingredients</h1>
            {ingredients.map((ingredient, index) => (
              <p className="ingredients mt-2" key={index}>{`${index + 1}.) ${ingredient.amount}${ingredient.unit} ${ingredient.name}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePageGuest;