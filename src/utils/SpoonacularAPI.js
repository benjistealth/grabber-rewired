import axios from "axios";
//  const APIBEN = "be6eef2b49db4c8dbd28a079057dc1bf"
// const APITOBY = "34eb103a0ad24befb4b7e0baab8e14c4"
const APISHANE = "d138f64a7743495a93de5afbdd231e53"
// const APILEANNE = "13e0fbc930ae4ce7bfedbe575f39da4b"
const BASEURL = "https://api.spoonacular.com/recipes/complexSearch?query=";
const APIKEY = "&apiKey=" + APISHANE;
const URLEND = "&addRecipeNutrition=true&fillIngredients=true&instructionsRequired=true&addRecipeInformation=true&number=9"

function SpoonacularAPI(query) {
  return axios
    .get(BASEURL + query + APIKEY + URLEND)
    .then((response) => {
      return response.data.results;
     })
    .catch((err) => {
      // throw err - Swallow errors :-D
    })
}

export default SpoonacularAPI;

