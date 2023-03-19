import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RecipeSearchBar from "../../components/HomeComponents/RecipeSearchBar";
import RecipeCardDisplay from "../../components/HomeComponents/RecipeCardDisplay";
import Wrapper from "../../components/HomeComponents/Wrapper";
import UnsplashAPI from "../../utils/unsplashAPI";
import "./Favourites.css";

function Favourites() {
    const storedResults = JSON.parse(localStorage.getItem('favourites'));
    const [spoonacularResults, setSpoonacularResults] = useState(storedResults);
    // const [search, setSearch] = useState("");
    const [unsplashImage, setBackgroundImg] = useState(localStorage.getItem('unsplashImage')); // draws background image from local storage
    const navigate = useNavigate();

    function HandleCardClick(e) {
        const recipeId = parseInt(e.target.alt)
        for (let i = 0; i < spoonacularResults.length; i++) {
            if (spoonacularResults[i].id === recipeId) {
                localStorage.setItem('individual-result', JSON.stringify(spoonacularResults[i]));
            }
        }
        navigate("/RecipePage");
    };

    function homeButton() {
        navigate('/');
    };

    const SearchPage = () => {
        navigate("/RecipeSearchContainer");
    };

    const printRecipe = () => {
        printJS({
            printable: "printRecipe",
            type: "html"
        });
    };

    const EmailRecipe = (e) => {
        e.preventDefault();

        const loggeduser = JSON.parse(localStorage.getItem("user"));
        const user_name = loggeduser.name;
        const user_email = loggeduser.email;

        let emailData = individualRecipe.title + "\n";
        emailData += individualRecipe.sourceUrl + "\n";
        emailData += individualRecipe.summary + "\n";

        var templateParams = {
            user_name: user_name,
            user_email: user_email,
            my_html: emailData
        };

        //   Copied from RecipePage                                                                                     //
        // leaving the email sending commented out as I used 25% of monthly allowance already :-) //
        //                                                                                        //
        console.log(templateParams); // test email send button to browser console

        // emailjs.send(serviceID, templateID, templateParams, publicKey)
        // emailjs.send('service_4kxk2ps', 'template_qgabn5g', templateParams, 'NyspTPaNNuHG_EVwK')
        //   .then(function (response) {
        //     // console.log('SUCCESS!', response.status, response.text);
        //     alert("Email Sent.....😍")
        //   }, function (error) {
        //     console.log('FAILED...', error);
        //     alert("Email send error.....💩")
        //   });

    };
};

export default Favourites