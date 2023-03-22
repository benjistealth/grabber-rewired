import { useLocation } from "react-router-dom";

function JumbotronTitle() {
  const location = useLocation();
  const path = location.pathname;
  const individualRecipe = JSON.parse(
    localStorage.getItem("individual-result")
  );
  let jumbotronTitle;

  switch (path) {
    case "/":
      jumbotronTitle = "<Grabber Rewired />";
      break;
    case "/Login":
      jumbotronTitle = "<Grabber Rewired /> Login";
      break;
    case "/SignUp":
      jumbotronTitle = "<Grabber Rewired /> Register";
      break;
    case "/RecipeSearchContainer":
      jumbotronTitle = "Recipe Search";
      break;
    case "/RecipeSearchGuest":
      jumbotronTitle = "Recipe Search";
      break;
    case "/Favourites":
      jumbotronTitle = "Favourite Recipes";
      break;
    case "/RecipePage":
      jumbotronTitle = individualRecipe.title;
      break;
    case "/RecipePageGuest":
      jumbotronTitle = individualRecipe.title;
      break;
    case "/FavouriteRecipePage":
      jumbotronTitle = individualRecipe.title;
      break;
    default:
      break;
  }

  const style = {
    fontFamily: "'Kocak', sans-serif",                                     
    position: "absolute",
    display: "inline",
    top: "40%",
    left: "10%",
    height: "20%",
    width: "40%",
    fontSize: "clamp(16px, 2vw, 40px)",
  };

  return (
    <div>
      <h1 className="display-4" style={style}>
        {jumbotronTitle}
      </h1>
    </div>
  );
}

export default JumbotronTitle;
