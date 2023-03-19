import { useLocation } from "react-router-dom";

function JumbotronTitle() {
    const location = useLocation();
    const path = location.pathname;
    const individualRecipe = JSON.parse(localStorage.getItem("individual-result"));
    let jumbotronTitle;

    switch(path){
        case '/':
            jumbotronTitle = "<Grabber Rewired />";
            break;
        case '/RecipeSearchContainer':
            jumbotronTitle = "Recipe Search";
            break;
        case '/RecipeSearchGuest':
            jumbotronTitle = "Recipe Search";
            break;
         case '/RecipePage':
            jumbotronTitle = individualRecipe.title;
            break;
        case '/RecipePageGuest':
            jumbotronTitle = individualRecipe.title;
            break;
        default:
            break;
    }

    const style = {
        position: 'absolute',
        display: 'inline',
        top: '40%',
        left: '10%',
        height: '20%',
        width: '50%'
    }

    return(
        <div>
            <h1 className="display-4" style={style}>{jumbotronTitle}</h1>

        </div>
    );
};

export default JumbotronTitle;