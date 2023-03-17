import React  from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
import "../css/RecipePage.css";
import Ingredients from "../utils/Ingredients.js";



function RecipePage() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  Ingredients(individualRecipe.id);
  console.log(Ingredients);
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
      <button className="btn btn-back" onClick={GoBack}>Go Back</button>
      <img src={individualRecipe.image} alt={individualRecipe.title}/>

   
      <button className="btn btn-back" onClick={GoBack}>Go Back</button>
    </div>
  );
}

export default RecipePage;