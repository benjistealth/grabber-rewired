import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpoonacularAPI from "../utils/SpoonacularAPI";
import RecipeSearchBar from "../components/home/RecipeSearchBar";
import RecipeCardDisplay from "../components/home/RecipeCardDisplay";
import Wrapper from "../components/home/Wrapper";
import UnsplashAPI from "../utils/unsplashAPI";
import "../css/RecipeSearchContainer.css";


function RecipeSearchGuest() {
  const storedResults = JSON.parse(localStorage.getItem('recipe-results')) || []; // checks for stored data or uses empty array if none found
  const [spoonacularResults, setSpoonacularResults] = useState(storedResults);
  const [search, setSearch] = useState("");
  const [unsplashImage, setBackgroundImg] = useState(localStorage.getItem('unsplashImage')); // draws background image from local storage
  const navigate = useNavigate();
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem('recipe-results', JSON.stringify(spoonacularResults));
    searchRecipes(search);
  }

  function HandleCardClick(e) {
    const recipeId = parseInt(e.target.alt)
    for (let i = 0; i < spoonacularResults.length; i++) {
      if (spoonacularResults[i].id === recipeId) {
        localStorage.setItem('individual-result', JSON.stringify(spoonacularResults[i]));
      }
    }
    navigate("/RecipePageGuest");
  };

  function homeButton() {
    navigate('/');
  }

  const searchRecipes = (query) => {
    SpoonacularAPI(query)
      .then((results) => {
        setSpoonacularResults(results);
        localStorage.setItem('recipe-results', JSON.stringify(results)); // save new results to local storage
      })
      .catch((err) => {
        throw err;
      })

    UnsplashAPI(search)
      .then((results) => {
        const backgroundImage = results[Math.floor(Math.random() * 9)].urls.regular;
        setBackgroundImg(backgroundImage);
        localStorage.setItem('unsplashImage', backgroundImage);
      })
      .catch((err) => {
        throw err;
      })
  };

  const backgroundStyle = {
    backgroundImage: `url("${unsplashImage}")`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
  }

  return (
    <div style={backgroundStyle} className="cardContainer">
      <div className="container">
        <RecipeSearchBar
          onChange={handleChange}
          value={search}
          onClick={handleFormSubmit}
        />
        <button onClick={homeButton}>HOME PAGE</button>

        <div className="container">
          <Wrapper>
            {spoonacularResults.map((result) => (
              <RecipeCardDisplay
                key={result.id}
                id={result.id}
                name={result.title}
                image={result.image}
                onClick={HandleCardClick}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default RecipeSearchGuest;


// cards clickable. event handlers DONE

// clicked card shows correct json data in console log DONE

// react router create new page DONE

// take that json data and show it on new page DONE

// react router new page will have buttons. event handlers needed for those DONE

// Ben, working on send email function & clean up file structure

// Toby, working on nutritional info
