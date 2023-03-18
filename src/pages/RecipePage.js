import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
// import Nutrition from "../components/home/Nutrition";
import "../css/RecipePage.css";

function RecipePage() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  const [servingSize, setServingSize] = useState(individualRecipe.servings)

  const recipeSteps = individualRecipe.analyzedInstructions[0].steps;
  const ingredients = individualRecipe.extendedIngredients;
  const GoBack = () => {
    navigate("/RecipeSearchContainer");
  }

  const caloricBreakdown = individualRecipe.nutrition.caloricBreakdown;

  const printRecipe = () => {
    printJS({
      printable: "printRecipe",
      type: "html"
    });
  }

  function handleSlider(e) {
    setServingSize(e.target.value);
  }

  return (
    <div className="maincontainer">
      {/* <button className="btn btn-back" onClick={handleClick}>Nutrition</button> */}
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
          <div className="col-md-2 ms-4 mt-4 instructionscontainer">
            <h1 className="titleHeader">Nutrition</h1>
              <p>{`Carbs: ${caloricBreakdown.percentCarbs}%`}</p>
              <p>{`Fat: ${caloricBreakdown.percentFat}%`}</p>
              <p>{`Protein: ${caloricBreakdown.percentProtein}%`}</p>
          
          </div>
          <div className="col-md-6 ms-4 mt-4 instructionscontainer">
            <h1 className="titleHeader">Instructions</h1>
            {recipeSteps.map((recipeStep, index) => (
              <p className="instructions mt-2" key={index}>{`${index + 1}.)  ${
                recipeStep.step
              }`}</p>
            ))}
          </div>
          <div className="col-md-3 ms-5 mt-4 ingredientscontainer">
            <h1 className="titleHeader">Ingredients</h1>
            <label htmlFor="customRange2">{`Serving size: ${servingSize}`}</label>
            <input type="range" className="custom-range" min="1" max="20" id="customRange2" value={servingSize} onChange={handleSlider}></input>
            {ingredients.map((ingredient, index) => (
              <p className="ingredients mt-2" key={index}>{`${index + 1}.) ${
                (ingredient.amount = ingredient.amount * (servingSize / individualRecipe.servings)).toFixed(1)
              } ${ingredient.unit} ${ingredient.name}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;