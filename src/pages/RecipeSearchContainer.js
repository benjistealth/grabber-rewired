import React, { useState } from "react";
import SpoonacularAPI from "../utils/SpoonacularAPI";
import RecipeSearchBar from "../components/home/RecipeSearchBar";

function RecipeContainer() {
  const [search, setSearch] = useState(""); // useState is empty string

  function handleChange(e) {
    setSearch(e.target.value); // sets search var to search value
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    searchRecipes(search); // function starts axios GET with search parameter
  }

  const searchRecipes = (query) => {
    console.log(query);
    SpoonacularAPI(query);
  };

  return (
    <div>
      <RecipeSearchBar
        onChange={handleChange}
        value={search}
        onClick={handleFormSubmit}
      />
    </div>
  );
}

export default RecipeContainer;
