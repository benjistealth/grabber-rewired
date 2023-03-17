import React from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";

// localStorage.getItem("individual-result")
// id 

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
      <button className="btn btn-back" onClick={GoBack}>
        Go Back
      </button>
      <div id="printRecipe">
        <p className="test">Test</p>
        <p className="test2">Test 2</p>
        <p className="test3">Test 3</p>
      </div>
      <img
        src={individualRecipe.image}
        alt={individualRecipe.title}
      />
      
      <button className="btn btn-back" onClick={GoBack}>
        Go Back
      </button>
      <button type="button" onClick={printRecipe}>
        Print Recipe
      </button>
    </div>
  );
}

export default RecipePage;