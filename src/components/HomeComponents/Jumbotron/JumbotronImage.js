import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../Theme/Theme";
import lightTheme from "./assets/light-theme.png";
import darkTheme from "./assets/dark-theme.png";

function JumbotronImage() {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const path = location.pathname;
  const individualRecipe = JSON.parse(
    localStorage.getItem("individual-result")
  );
  let jumbotronImage;
  let screenshot;

  if (theme === "light-theme") {
    screenshot = lightTheme;
  } else {
    screenshot = darkTheme;
  }

  switch (path) {
    case "/":
      jumbotronImage = screenshot;
      break;
    case "/Login":
      jumbotronImage = screenshot;
      break;
    case "/SignUp":
      jumbotronImage = screenshot;
      break;
    case "/RecipeSearchContainer":
      jumbotronImage = screenshot;
      break;
    case "/RecipeSearchGuest":
      jumbotronImage = screenshot;
      break;
    case "/Favourites":
      jumbotronImage = screenshot;
      break;
    case "/RecipePage":
      jumbotronImage = individualRecipe.image;
      break;
    case "/RecipePageGuest":
      jumbotronImage = individualRecipe.image;
      break;
    case "/FavouriteRecipePage":
      jumbotronImage = individualRecipe.image;
      break;
    default:
      break;
  }

  const style = {
    position: "absolute",
    bottom: "15%",
    left: "50%",
    width: "30%",
    height: "auto",
    borderRadius: "5px",
    border: "1px, solid, black",
  };

  return (
    <div>
      <img alt={""} src={jumbotronImage} style={style}></img>
    </div>
  );
}

export default JumbotronImage;
