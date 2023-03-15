import axios from "axios";

const BASEURL = "https://api.spoonacular.com/recipes/complexSearch?query=";
const APIKEY = "&apiKey=be6eef2b49db4c8dbd28a079057dc1bf";
const URLEND = "&includeInstruction=true&addRecipeInformation=true&number=9"


function SpoonacularAPI(query) {
  return axios
    .get(BASEURL + query + APIKEY + URLEND)
    .then((response) => {
      console.log(response)
      return response.data.results;
     })
    .catch((err) => {
      throw err
    })
}

export default SpoonacularAPI;

