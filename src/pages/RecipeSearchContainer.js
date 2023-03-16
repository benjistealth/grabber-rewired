import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpoonacularAPI from "../utils/SpoonacularAPI";
import RecipeSearchBar from "../components/home/RecipeSearchBar";
import RecipeCardDisplay from "../components/home/RecipeCardDisplay";
import Wrapper from "../components/home/Wrapper";
import UnsplashAPI from "../utils/unsplashAPI";


function RecipeSearchContainer() {
  const [search, setSearch] = useState(""); // useState is empty string
  const [spoonacularResults, setSpoonacularResults] = useState([]);
  const [unsplashImage, setBackgroundImg] = useState();
  // const [selectedRecipe, setSelectedRecipe] = useState([]);
  // const [friends, setFriends] = useState();
  const navigate = useNavigate();


  // const navigate = useNavigate();
    
  // function goToProject(page) {
  //   navigate(page, { replace: true });

  //     console.log('Page chosen ', page);
  //     //when the project is selected, the chosen project page will be shown 
  //     //where you can click through to the project itself
  //     //the project page will have some text talking about the project
  // }


  function handleChange(e) {
    setSearch(e.target.value); // sets search var to search value
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem('recipe-results', JSON.stringify(spoonacularResults));

    searchRecipes(search); // function starts axios GET with search parameter 
  }

  function HandleCardClick(e) {
    // goToProject("./Recipe")
    e.preventDefault()
    const recipeId = parseInt(e.target.alt)
    for(let i = 0; i < spoonacularResults.length; i++) {
      if(spoonacularResults[i].id === recipeId){
        localStorage.setItem('individual-result', JSON.stringify(spoonacularResults[i]));
      }
    }  

    navigate("/RecipePage");

  };

  const searchRecipes = (query) => {
    SpoonacularAPI(query)
    .then((results) => {
      console.log(results);
      
      setSpoonacularResults(results);
    }) 
    .catch((err) => {
      throw err;
    })

    UnsplashAPI(search)
    .then((results) => {
      setBackgroundImg(results[1].urls.regular);
    })
    .catch((err) => {
      throw err;
    })
  };

  const backgroundStyle = {
    backgroundImage: `url("${unsplashImage}")`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  }

  // function consoleLog(query) {
  //   console.log()
  // }

  

  return (
    <div style={backgroundStyle}>
    <div className="container">
    <RecipeSearchBar
        onChange={handleChange}
        value={search}
        onClick={handleFormSubmit}
      />
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


// cards clickable. event handlers DONE

// clicked card shows correct json data in console log DONE

// react router create new page DONE

// take that json data and show it on new page

// react router new page will have buttons. event handlers needed for those
