// ingredients API call page

import Axios from "axios";
// const APIBEN = "be6eef2b49db4c8dbd28a079057dc1bf"
const APITOBY = "34eb103a0ad24befb4b7e0baab8e14c4"
// const APISHANE = "d138f64a7743495a93de5afbdd231e53"
// const APILEANNE = "13e0fbc930ae4ce7bfedbe575f39da4b"
const BASEURL = "https://api.spoonacular.com/recipes/";
const APIKEY =  APITOBY;
const URLOption = "/information?includeNutrition=true&apiKey="


function Ingredients(recipeId) {
  Axios
    .get(BASEURL + recipeId + URLOption + APIKEY)
    .then((recipeIdResponse) => {
      // let ingredientArr = [];
      // for (let i = 0; i < recipeIdResponse.extendedIngredients.length; i++) {
      //   var ingredient = recipeIdResponse.extendedIngredients[i].name;
      //   var measureAmount = recipeIdResponse.extendedIngredients[i].measures.metric.amount.toFixed(1);
      //   var measureUnit = recipeIdResponse.extendedIngredients[i].measures.metric.unitLong;
      //   // store array of ingredients pre-formatted per line
      //   ingredientArr.push("   " + (i + 1) + ".)  " + measureAmount + " " + measureUnit + " " + ingredient);
      // save ingredients from API call with recipe ID
      localStorage.setItem("ingredients", JSON.stringify(recipeIdResponse));
      console.log(recipeIdResponse);
      // return recipeIdResponse.data.results;
     })
    .catch((err) => {
      throw err
    })
}

export default Ingredients;