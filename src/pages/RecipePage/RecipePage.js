import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
import "./RecipePage.css";
// import emailjs from '@emailjs/browser'; - uncomment this and below to enable email sending
// commented to conserve email allowance for required tests

function RecipePage() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  const [servingSize, setServingSize] = useState(individualRecipe.servings);
  const recipeSteps = individualRecipe.analyzedInstructions[0].steps;
  const ingredients = individualRecipe.extendedIngredients;
  const GoBack = () => {
    navigate("/RecipeSearchContainer");
  };

  const caloricBreakdown = individualRecipe.nutrition.caloricBreakdown;

  const printRecipe = () => {
    printJS({
      printable: "printRecipe",
      type: "html"
    });
  };

  const EmailRecipe = (e) => {
    e.preventDefault();

    const loggeduser = JSON.parse(localStorage.getItem("user"));
    const user_name = loggeduser.name;
    const user_email = loggeduser.email;

    let emailData = individualRecipe.title + "\n";
    emailData += individualRecipe.sourceUrl + "\n";
    emailData += individualRecipe.summary + "\n";

    var templateParams = {
      user_name: user_name,
      user_email: user_email,
      message: emailData
    };

    //                                                                                        //
    // leaving the email sending commented out as I used 25% of monthly allowance already :-) //
    //                                                                                        //
    console.log(templateParams); // test email send button to browser console

    // emailjs.send(serviceID, templateID, templateParams, publicKey)
    // emailjs.send('service_4kxk2ps', 'template_qgabn5g', templateParams, 'NyspTPaNNuHG_EVwK')
    //   .then(function (response) {
    //     // console.log('SUCCESS!', response.status, response.text);
    //     alert("Email Sent.....😍")
    //   }, function (error) {
    //     console.log('FAILED...', error);
    //     alert("Email send error.....💩")
    //   });

  };

  function addToFavorites(recipe) {
    const favorites = JSON.parse(localStorage.getItem('favourites')) || []; // retrieves the stored array from local storage or creates a new one if none exists
    if (!favorites.some(favorite => favorite.id === recipe.id)) { //checks to see if the item is already in the favourites list and if not adds it
      favorites.push(recipe);
      localStorage.setItem('favourites', JSON.stringify(favorites));
      console.log(recipe.title + " stored to favourites");
    } else {
      console.log(recipe.title + " is already in favourites");
    }
  }

  function setFavourite(e) {
    e.preventDefault();
    addToFavorites(individualRecipe);
  };

  function handleSlider(e) {
    setServingSize(e.target.value);
  };

  return (
    <div className="container maincontainer">
      {/* <button className="btn btn-back" onClick={handleClick}>Nutrition</button> */}
      <div className="btn-box">
        <div className="btn-box-bk">
          <button className="btn btn-back" onClick={GoBack}>
            Go Back
          </button>
          <br />
          <button className="btn btn-back" onClick={setFavourite}>
            Favourite 🤍
          </button>
          <br />
        </div>
        <div className="btn-box-util">
          <button className="btn btn-print" onClick={printRecipe}>
            Print Recipe
          </button>
          <br />
          <button className="btn btn-email" onClick={EmailRecipe}>
            Email yourself THIS recipe
          </button>
          <br />
        </div>
      </div>
      <div className="recipe" id="printRecipe">
        {/* <h1 className="foodTitle">{individualRecipe.title}</h1>
        <br />
        <div className="imageContainer">
          <img
            src={individualRecipe.image}
            alt={individualRecipe.title}
            className="selectedImage"
          />
        </div> */}
        <div className="container infocontainer">
          <div className="col-md-2 ms-3 mt-5 mb-5 instructionscontainer">
            <h1 className="titleHeader">Nutrition</h1>
            <p>{`Carbs: ${caloricBreakdown.percentCarbs}%`}</p>
            <p>{`Fat: ${caloricBreakdown.percentFat}%`}</p>
            <p>{`Protein: ${caloricBreakdown.percentProtein}%`}</p>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-4 ms-3 mt-5 mb-5 instructionscontainer">
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