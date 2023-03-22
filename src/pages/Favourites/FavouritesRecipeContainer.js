import React from "react";
import { useNavigate } from 'react-router-dom';
import RecipeCardDisplay from "../../components/HomeComponents/RecipeCardDisplay";
import Wrapper from "../../components/HomeComponents/Wrapper";
import "./FavouritesRecipeContainer.css";

function Favourites() {
  const storedResults = JSON.parse(localStorage.getItem("favourites"));
  const navigate = useNavigate();

  function homeButton() {
    navigate("/");
  }

  const searchPage = () => {
    navigate("/RecipeSearchContainer");
  };

    function HandleCardClick(e) {
      const recipeId = parseInt(e.target.alt);
        for (let i = 0; i < storedResults.length; i++) {
            if (storedResults[i].id === recipeId) {
                localStorage.setItem("individual-result", JSON.stringify(storedResults[i])
                );
            }
        }
        navigate("/FavouriteRecipePage");
    }

  const backgroundStyle = {
    backgroundImage: `url("${localStorage.getItem('unsplashImage')}")`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
  };

  return (
    <div style={backgroundStyle} className="cardContainer fav-cardContainer">
      <div className="container">
        <div className="btn-box-home container">
          <button className="btn btn-home" onClick={homeButton}>
            HOME PAGE
          </button>

          <button className="btn btn-home" onClick={searchPage}>
            SEARCH PAGE
          </button>

          <br />
        </div>

        <div className="container">
          <Wrapper>
            {storedResults.map((props) => (
              <RecipeCardDisplay
                key={props.id}
                id={props.id}
                name={props.title}
                image={props.image}
                onClick={HandleCardClick}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Favourites