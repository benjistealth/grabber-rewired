import React, { useState } from "react";
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

  function handleChange(e) {
    setSearch(e.target.value); // sets search var to search value
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    searchRecipes(search); // function starts axios GET with search parameter 
  }

  function handleCardClick(e) {
    const recipeId = parseInt(e.target.alt)
  
    for(let i = 0; i < spoonacularResults.length; i++) {

      console.log(typeof spoonacularResults[i].id)
      
      if(spoonacularResults[i].id === recipeId){
        console.log(spoonacularResults[i]);
        localStorage.setItem('individual-result', JSON.stringify(spoonacularResults[i]));

      }
    }
    // setSelectedRecipe(spoonacularResults)
    localStorage.setItem('recipe-results', JSON.stringify(spoonacularResults));

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
      setBackgroundImg(results[1].urls.full);
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
              onClick={handleCardClick}
                  
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

// react router create new page

// take that json data and show it on new page

// react router new page will have buttons. event handlers needed for those


// import projects from '../../projects.json';
// import ProjCard from '../../ProjCard/ProjCard';
// import CardWrapper from '../../CardWrapper/CardWrapper';
// // required to trigger page changes via router from JS
// import { useNavigate } from "react-router-dom";


// function ProjectGallery(props) {

//     const navigate = useNavigate();
    
//     function GoToProject(page) {

//         navigate(page);

//         console.log('Page chosen ', page);
//         //when the project is selected, the chosen project page will be shown 
//         //where you can click through to the project itself
//         //the project page will have some text talking about the project
//     }

//     return (
//         <div className="container">
//             <CardWrapper>
//             {projects.map(f => <ProjCard key={f.id} name={f.name} repoURL={f.repoURL} deployedUrl={f.deployedUrl}
//                     image={f.image}
//                     description={f.description}
//                     selectFunction={() => { GoToProject(f.page) }} />)} {/* make this a select function above and go to a new page for each project?*/}

//             </CardWrapper>
//         </div>
//     );
// }

// export default ProjectGallery;