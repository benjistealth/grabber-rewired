import React  from "react";
import { useNavigate } from 'react-router-dom';
import "../css/RecipePage.css"



function RecipePage() {
  const navigate = useNavigate();

  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  console.log(individualRecipe.image)
	const GoBack = () => {
		navigate(-1);
	}

  return (
    <div>
      <button className="btn btn-back" onClick={GoBack}>Go Back</button><br/>
      <h1 className="foodTitle">{individualRecipe.title}</h1><br/>
      <div className="imageContainer">
        <img src={individualRecipe.image} alt={individualRecipe.title} className="selectedImage"/>
      </div>
      <div>Where we put ingredients</div>
      <div>where we put the steps</div>
      <button className="btn btn-back" onClick={GoBack}>Go Back</button>
    </div>
  );
}

export default RecipePage;