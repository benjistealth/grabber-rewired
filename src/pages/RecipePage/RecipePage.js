import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import printJS from "print-js";
import "./RecipePage.css";
//import emailjs from '@emailjs/browser'; // - uncomment this and below to enable email sending
// commented to conserve email allowance for required tests

function RecipePage() {
  const navigate = useNavigate();
  const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
  const favourites = JSON.parse(localStorage.getItem('favourites')) || []; // retrieves the stored array from local storage or creates a new one if none exists

  const [servingSize, setServingSize] = useState(individualRecipe.servings);
  const recipeSteps = individualRecipe.analyzedInstructions[0].steps;
  const ingredients = individualRecipe.extendedIngredients;
  const [favorated, setFavorated] = useState(favourites.some(favorate => favorate.id === individualRecipe.id));
  const heart = document.querySelector('#heart')
  // console.log(favorated)
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

    console.log(templateParams); // test email send to console to conserve email allowance for testing

    // emailjs.send(serviceID, templateID, templateParams, publicKey)
  //   emailjs.send('service_4kxk2ps', 'template_qgabn5g', templateParams, 'NyspTPaNNuHG_EVwK')
  //     .then(function (response) {
  //       alert("Email Sent.....😍")
  //     }, function (error) {
  //       // console.log('FAILED...', error); swallow errors for marking :-)
  //       alert("Email send error.....💩")
  //     });

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
    window.location.reload();
  }

  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    const favourited = JSON.parse(localStorage.getItem("favourites"));
    setMyArray(favourited);
  }, []);

  const hasObject = myArray.some(item => item.id === individualRecipe.id);


  // favourites.forEach(favorate => {
  //   if(individualRecipe.id === favorate.id) {
  //     setFavorated(true);
  //   } else {
  //     setFavorated(false);
  //   }
  // })
  if (favorated === true) {
    console.log(true)
    console.log(heart)
    // heart.style.color = 'red'
  } else {
    console.log(false)
    console.log(heart)

    // heart.style.removeProperty('color')
  }

  

  function setFavourite(e) {
    e.preventDefault();
    console.log(e)
    // console.log(favorated)
    

    if (favorated === false) {
      addToFavourites(individualRecipe);
      heart.style.color = 'red'
      setFavorated(true)
    } else  if (favorated === true){
      removeFromFavourites(individualRecipe);
      heart.style.removeProperty('color')
      setFavorated(false)
    }
  
  };

  function handleSlider(e) {
    setServingSize(e.target.value);
  };



  return (
    <div className="container maincontainer">

      <div className="btn-box container">

        <div className="btn-box-left">
          <button className="btn btn-recipe" onClick={GoBack}>
            <p>Go Back</p>
          </button>
          {/* <br /> */}
          <button className="btn btn-recipe btn-fav" onClick={setFavourite}>
            Add Favourite <span id="heart">♥</span>
          </button>
          <button className="btn btn-recipe btn-fav" onClick={() => removeFromFavourites(individualRecipe)}>
            Remove Favourite <span id="heart" style={{ color: hasObject ? "red" : "white"}}>♥</span>
          </button>
          {/* <br /> */}
        </div>

        <div className="btn-box-right">
          <button className="btn btn-recipe" onClick={printRecipe}>
            Print Recipe
          </button>
          {/* <br /> */}
          <button className="btn btn-recipe" onClick={EmailRecipe}>
            Email yourself THIS recipe
          </button>
          {/* <br /> */}
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