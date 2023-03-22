import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
import "./RecipePage.css";
import emailjs from '@emailjs/browser'; // - uncomment this and below to enable email sending
// commented to conserve email allowance for required tests

function RecipePage() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  const favourites = JSON.parse(localStorage.getItem('favourites')) || []; // retrieves the stored array from local storage or creates a new one if none exists
  const recipeSteps = individualRecipe.analyzedInstructions[0].steps;
  const ingredients = individualRecipe.extendedIngredients;
  const caloricBreakdown = individualRecipe.nutrition.caloricBreakdown;
  const [servingSize, setServingSize] = useState(individualRecipe.servings);
  const [favorated, setFavorated] = useState(favourites.some(favorate => favorate.id === individualRecipe.id));
  const [myArray, setMyArray] = useState([]);
  const heart = document.querySelector('#heart')

  function GoBack() {
    navigate("/RecipeSearchContainer");
  };


  function printRecipe() {
    printJS({
      printable: "printRecipe",
      type: "html"
    });
  };

  function EmailRecipe(e) {
    e.preventDefault();

    const loggeduser = JSON.parse(localStorage.getItem("user"));
    const user_name = loggeduser.name;
    const user_email = loggeduser.email;

    const r_title = individualRecipe.title + "\n";
    const r_url = individualRecipe.sourceUrl + "\n";
    const r_summary = individualRecipe.summary + "\n";

    var templateParams = {
      user_name: user_name,
      user_email: user_email,
      r_title: r_title,
      r_url: r_url,
      r_summary: r_summary
    };

    emailjs.send('service_4kxk2ps', 'template_qgabn5g', templateParams, 'NyspTPaNNuHG_EVwK')
      .then(function (response) {
        alert("Email Sent.....😍")
      }, function (error) {
        alert("Email send error.....💩")
      });
  };

  function addToFavourites(recipe) {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || []; // retrieves the stored array from local storage or creates a new one if none exists
    if (!favourites.some(favourite => favourite.id === recipe.id)) { //checks to see if the item is already in the favourites list and if not adds it
      favourites.push(recipe);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    } 
  }

  function removeFromFavourites(recipe) {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    favourites.forEach(favorate => {
      if(recipe.id === favorate.id) {
        const index = favourites.indexOf(favorate);
        favourites.splice(index, 1);
        localStorage.setItem('favourites', JSON.stringify(favourites));
      }
    })
  }

  useEffect(() => {
    const favourited = JSON.parse(localStorage.getItem("favourites"));
    setMyArray(favourited);
  }, []);

  let hasObject;
  if(myArray !== null) {
     hasObject = myArray.some(item => item.id === individualRecipe.id);
  }
  
  function setFavourite(e) {
    e.preventDefault();    
    if (favorated === false) {
      addToFavourites(individualRecipe);
      heart.style.color = 'red';
      setFavorated(true);
    } else  if (favorated === true){
      removeFromFavourites(individualRecipe);
      heart.style.removeProperty('color');
      setFavorated(false);
    }
  };

  function handleSlider(e) {
    setServingSize(e.target.value);
  };

  return (
    <div className="container maincontainer">
      <div className="btn-box container">
        <div className="btn-box-left">
          <button className="btn btn-recipe btn-bk" onClick={GoBack}>
            <p>Go Back</p>
          </button>
          <button className="btn btn-recipe full-text btn-fav" onClick={setFavourite}>
            {favorated ? 'Remove Favourite' : 'Add Favourite'} <span id="heart" style={{ color: hasObject ? "red" : "grey" }}>♥</span>
          </button>
          <button className="btn btn-recipe short-text btn-fav" onClick={setFavourite}>
            {favorated ? '- Fav' : '+ Fav'} <span id="heart" style={{ color: hasObject ? "red" : "grey" }}>♥</span>
          </button>
        </div>
        <div className="btn-box-right">
          <button className="btn btn-recipe full-text btn-print" onClick={printRecipe}>
            Print Recipe
          </button>
          <button className="btn btn-recipe short-text btn-print" onClick={printRecipe}>
            Print
          </button>
          <button className="btn btn-recipe full-text btn-email" onClick={EmailRecipe}>
            Email yourself THIS recipe
          </button>
          <button className="btn btn-recipe short-text btn-email" onClick={EmailRecipe}>
            Email
          </button>
        </div>
      </div> 
      <div className="recipe" id="printRecipe">
        <div className="container infocontainer">
          <div className="col-md-2 ms-3 mt-5 mb-5 instructionscontainer">
            <h1 className="titleHeader">Nutrition</h1>
            <p>{`Carbs: ${caloricBreakdown.percentCarbs}%`}</p>
            <p>{`Fat: ${caloricBreakdown.percentFat}%`}</p>
            <p>{`Protein: ${caloricBreakdown.percentProtein}%`}</p>
          </div>
          <div className="col-lg-7 col-md-4 col-sm-4 ms-3 mt-5 mb-5 instructionscontainer">
            <h1 className="titleHeader">Instructions</h1>
            {recipeSteps.map((recipeStep, index) => (
              <p className="instructions mt-2" key={index}>{`${index + 1}.)  ${recipeStep.step
                }`}</p>
            ))}
          </div>
          <div className="col-md-3 col-sm-3 ms-4 mt-5 mb-5 ingredientscontainer">
            <h1 className="titleHeader">Ingredients</h1>
            <label htmlFor="customRange2">{`Serving size: ${servingSize}`}</label>
            <input
              type="range"
              className="custom-range"
              min="1"
              max="20"
              id="customRange2"
              value={servingSize}
              onChange={handleSlider}
            ></input>
            {ingredients.map((ingredient, index) => (
              <p className="ingredients mt-2" key={index}>{`${index + 1
                }.) ${(ingredient.amount =
                  ingredient.amount *
                  (servingSize / individualRecipe.servings)).toFixed(1)} ${ingredient.unit
                } ${ingredient.name}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;