import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpoonacularAPI from "../../utils/SpoonacularAPI";
import RecipeSearchBar from "../../components/HomeComponents/RecipeSearchBar";
import RecipeCardDisplay from "../../components/HomeComponents/RecipeCardDisplay";
import Wrapper from "../../components/HomeComponents/Wrapper";
import UnsplashAPI from "../../utils/unsplashAPI";
import "./RecipeSearchContainer.css";

function RecipeSearchContainer() {
  const storedResults = JSON.parse(localStorage.getItem("recipe-results"));
  const [spoonacularResults, setSpoonacularResults] = useState(storedResults);
  const [search, setSearch] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [unsplashImage, setBackgroundImg] = useState(
    localStorage.getItem("unsplashImage")
  ); // draws background image from local storage
  const navigate = useNavigate();

  useEffect(() => {
    const favouritesExists = localStorage.getItem("favourites");
    if (favouritesExists) {
      setDisabled(false);
    }
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("recipe-results", JSON.stringify(spoonacularResults));
    searchRecipes(search);
  }

  function HandleCardClick(e) {
    const recipeId = parseInt(e.target.alt);
    for (let i = 0; i < spoonacularResults.length; i++) {
      if (spoonacularResults[i].id === recipeId) {
        localStorage.setItem(
          "individual-result",
          JSON.stringify(spoonacularResults[i])
        );
      }
    }
    navigate("/RecipePage");
  }

  // function testingButton() {
  //   navigate("/Testing");
  // }

  function homeButton() {
    navigate("/");
  }

  function favouritesButton() {
    navigate("/FavouritesRecipeContainer");
  }

  function searchRecipes(query) {
    SpoonacularAPI(query).then((results) => {
      if (results != null) {
        // catch empty payload coming back and skip save
        setSpoonacularResults(results);
        localStorage.setItem("recipe-results", JSON.stringify(results)); // save new results to local storage
      }
    });

    UnsplashAPI(search).then((results) => {
      const backgroundImage =
        results[Math.floor(Math.random() * 9)].urls.regular;
      setBackgroundImg(backgroundImage);
      localStorage.setItem("unsplashImage", backgroundImage);
    });
  }

  const backgroundStyle = {
    backgroundImage: `url("${unsplashImage}")`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
  };

  return (
    <div style={backgroundStyle} className="cardContainer">
      <div className="container">
        <br></br>
        <RecipeSearchBar
          onChange={handleChange}
          value={search}
          onClick={handleFormSubmit}
        />
        <div className="btn-box-home container">
          {/* <button className="btn btn-home" onClick={testingButton}>
            TESTING PAGE
          </button> */}

          <button className="btn btn-home" onClick={homeButton}>
            HOME PAGE
          </button>

          <button
            className="btn btn-home"
            disabled={disabled}
            onClick={favouritesButton}
          >
            FAVOURITES
          </button>
          <br />
        </div>

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

export default RecipeSearchContainer;
