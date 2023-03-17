import React  from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
import "../css/RecipePage.css"



function RecipePage() {
  const navigate = useNavigate();

  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  console.log(individualRecipe.image)
	const GoBack = () => {
		navigate(-1);
  }
  
  const printRecipe = () => {
    printJS({
      printable: "printRecipe",
      type: "html"
    });
  }

  return (
    <div>
      <button className="btn btn-back" onClick={GoBack}>Go Back</button>
      <img src={individualRecipe.image} alt={individualRecipe.title}/>

   
      <button className="btn btn-back" onClick={GoBack}>Go Back</button>
    </div>
  );
}

export default RecipePage;