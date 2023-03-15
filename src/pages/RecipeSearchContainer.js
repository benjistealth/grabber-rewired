import React, { useState } from "react";
import SpoonacularAPI from "../utils/SpoonacularAPI";
import RecipeSearchBar from "../components/home/RecipeSearchBar";
import RecipeCardDisplay from "../components/home/RecipeCardDisplay";
import Wrapper from "../components/home/Wrapper";

function RecipeSearchContainer() {
  const [search, setSearch] = useState(""); // useState is empty string
  const [spoonacularResults, setSpoonacularResults] = useState([]);
  // const [resetCards, setResetCards] = useState([]);

  function handleChange(e) {
    setSearch(e.target.value); // sets search var to search value
  }

  // function handleClearCards() {
  //   setResetCards([]);
  // }

  function handleFormSubmit(e) {
    e.preventDefault();
    // handleClearCards();
    searchRecipes(search); // function starts axios GET with search parameter 
  }

  const searchRecipes = (query) => {
    SpoonacularAPI(query)
    .then((results) => {
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
      <div className="container">
        <Wrapper>
          {spoonacularResults.map((result) => (
            <RecipeCardDisplay 
              key={result.id}
              id={result.id}
              name={result.title}
              image={result.image}
            />
          ))}
        </Wrapper>
      </div>
    </div>
  );
}

export default RecipeSearchContainer;
