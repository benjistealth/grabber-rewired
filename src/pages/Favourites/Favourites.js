import React from "react";
import { useNavigate } from 'react-router-dom';
import RecipeCardDisplay from "../../components/HomeComponents/RecipeCardDisplay";
// import Wrapper from "../../components/HomeComponents/Wrapper";
import "./Favourites.css";

function Favourites() {
    const storedResults = JSON.parse(localStorage.getItem('favourites'));
    // const [search, setSearch] = useState("");

    const navigate = useNavigate();

    // function HandleCardClick(e) {
    //     const recipeId = parseInt(e.target.id);
    //     navigate(`/RecipePage/${recipeId}`);
    // };

    function homeButton() {
        navigate('/');
    };

    const searchPage = () => {
        navigate("/RecipeSearchContainer");
    };


    return (
        <div className="cardContainer">
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
                    
                        {storedResults.map((result) => (
                            <RecipeCardDisplay
                                key={result.id}
                                id={result.id}
                                name={result.title}
                                image={result.image}
                                // onClick={HandleCardClick}
                            />
                        ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Favourites