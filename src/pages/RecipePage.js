import React  from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
import "../css/RecipePage.css";
import Ingredients from "../utils/Ingredients.js";



function RecipePage() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  Ingredients(individualRecipe.id);
  const secondAPICall = JSON.parse(localStorage.getItem("ingredients"))
  const recipeSteps = secondAPICall.data.analyzedInstructions[0].steps
  const ingredients = secondAPICall.data.extendedIngredients
	const GoBack = () => {
		navigate("/RecipeSearchContainer");
  }
  
  const printRecipe = () => {
    printJS({
      printable: "printRecipe",
      type: "html"
    });
  }
  console.log(printRecipe)
  return (
    <div>
      <button className="btn btn-back" onClick={GoBack}>Go Back</button><br/>
      <h1 className="foodTitle">{individualRecipe.title}</h1><br/>
      <div className="imageContainer">
        <img src={individualRecipe.image} alt={individualRecipe.title} className="selectedImage"/>
      </div>
      <div>
        {recipeSteps.map((recipeStep, index) => (
          <p key={index}>{`${index + 1}.)  ${recipeStep.step}`}</p>
        ))}
      </div>

      <div>
        {ingredients.map((ingredient, index) => (
          <p key={index}>{`${index + 1}.) ${ingredient.amount}${ingredient.unit} ${ingredient.name}`}</p>
        ))}
      </div>

      <div>where we put the steps</div>
      <button className="btn btn-back" onClick={GoBack}>Go Back</button>
    </div>
  );
}

export default RecipePage;