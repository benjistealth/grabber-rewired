import "./App.css";
import Jumbotron from "./components/HomeComponents/Jumbotron/Jumbotron";
import RecipeSearchContainer from "./pages/RecipeSearchContainer/RecipeSearchContainer";
import RecipeSearchGuest from "./pages/RecipeSearchContainer/RecipeSearchGuest";
import Footer from "./components/HomeComponents/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./Theme/Theme";
import { useContext } from "react";
import RecipePage from "./pages/RecipePage/RecipePage";
import RecipePageGuest from "./pages/RecipePage/RecipePageGuest";
import TestingPage from "./pages/TestingPage";
import SignUp from "./pages/SignUpLogin/SignUp";
import Login from "./pages/SignUpLogin/Login";
import Home from "./pages/Home/Home";
import FavouritesRecipeContainer from "./pages/Favourites/FavouritesRecipeContainer";
import FavouriteRecipePage from "./pages/Favourites/FavouriteRecipePage";
import Cube from "./components/HomeComponents/Cube";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`} data-test="component-app">
      <main className="mainbody">
        <Router>
          <Jumbotron />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Testing" element={<TestingPage />} />
              <Route path="/RecipePage" element={<RecipePage />} />
              <Route
                path="/RecipeSearchContainer"
                element={<RecipeSearchContainer />}
              />
              <Route path="/RecipePageGuest" element={<RecipePageGuest />} />
              <Route
                path="/RecipeSearchGuest"
                element={<RecipeSearchGuest />}
              />
              <Route path="/FavouritesRecipeContainer" element={<FavouritesRecipeContainer />} />
              <Route
                path="/FavouriteRecipePage"
                element={<FavouriteRecipePage />}
              />
               <Route path="/Cube" element={<Cube />} />
            </Routes>
          </div>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
