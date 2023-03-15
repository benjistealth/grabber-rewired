import React, { useState } from "react";
import SpoonacularAPI from "../utils/SpoonacularAPI";
import RecipeSearchBar from "../components/home/RecipeSearchBar";
import RecipeCardDisplay from "../components/home/RecipeCardDisplay";

function RecipeContainer() {
  const [search, setSearch] = useState(""); // useState is empty string
  const [spoonacularResults, setSpoonacularResults] = useState();


  function handleChange(e) {
    setSearch(e.target.value); // sets search var to search value
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    searchRecipes(search); // function starts axios GET with search parameter 
  }

  const searchRecipes = (query) => {
    console.log(query);
    SpoonacularAPI(search)
    .then(results => {
      setSpoonacularResults(results);
    }) 
    .catch((err) => {
      throw err
    })
  };

  return (
    <div>
      <RecipeSearchBar
        onChange={handleChange}
        value={search}
        onClick={handleFormSubmit}
      />
      <RecipeCardDisplay content={JSON.stringify(spoonacularResults)} />
    </div>
  );
}

export default RecipeContainer;
