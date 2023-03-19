import { useLocation } from "react-router-dom";
import screenshot from "./assets/screenshot.png"

function JumbotronImage() {
    const location = useLocation();
    const path = location.pathname;
    const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
    let jumbotronImage;

    switch(path){
        case '/':
            jumbotronImage = screenshot;
            break;
        case '/RecipeSearchContainer':
            jumbotronImage = screenshot;
            break;
        case '/RecipeSearchGuest':
            jumbotronImage =  screenshot;
            break;
         case '/RecipePage':
            jumbotronImage = individualRecipe.image;
            break;
        case '/RecipePageGuest':
            jumbotronImage = individualRecipe.image;
            break;
        default:
            break;
    }

    const style = {
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '400px',
        height: '80%'
    }

    return(
        <div>
            <img alt={""} src={jumbotronImage} style={style}></img>
        </div>
    )
}

export default JumbotronImage;