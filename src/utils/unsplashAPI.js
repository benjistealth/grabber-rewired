import axios from "axios";
const APIKeyUnsplash = "6E6B5n0kcsJUWySMsG9ewE8Ddesw6MegtEY4FU5_8gE";

function UnsplashAPI(recipeSearch) {
  const unsplashQuery = `https://api.unsplash.com/search/photos/?query=${recipeSearch}+food&auto=format&q=100&client_id=${APIKeyUnsplash}`;
  return axios.get(unsplashQuery).then((response) => {
    return response.data.results;
  });
}

export default UnsplashAPI;
