import React  from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
import "../css/RecipePage.css";
import Ingredients from "../utils/Ingredients.js";



function RecipePage() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  Ingredients(individualRecipe.id);
  const secondAPICall = JSON.parse(localStorage.getItem("ingredients"));
  const recipeSteps = secondAPICall.data.analyzedInstructions[0].steps;
  const ingredients = secondAPICall.data.extendedIngredients;

	const GoBack = () => {
		navigate("/RecipeSearchContainer");
  }
  
  const printRecipe = () => {
    printJS({
      printable: "printRecipe",
      type: "html"
    });
  }
  // console.log(printRecipe)
  return (
    <div className="maincontainer">
      <button className="btn btn-back" onClick={GoBack}>
        Go Back
      </button>
      <br />
      <button className="btn btn-print" onClick={printRecipe}>
        Print Recipe
      </button>
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
          <div className="col-md-8 ms-4 mt-4 instructionscontainer">
            <h1 className="titleHeader">Instructions</h1>
            {recipeSteps.map((recipeStep, index) => (
              <p className="instructions mt-2" key={index}>{`${index + 1}.)  ${
                recipeStep.step
              }`}</p>
            ))}
          </div>
          <div className="col-md-3 ms-5 mt-4 ingredientscontainer">
            <h1 className="titleHeader">Ingredients</h1>
            {ingredients.map((ingredient, index) => (
              <p className="ingredients mt-2" key={index}>{`${index + 1}.) ${
                ingredient.amount
              }${ingredient.unit} ${ingredient.name}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;