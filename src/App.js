import "./App.css";
// import Nav from "./components/home/Nav"; - might not need this
import Jumbotron from "./components/HomeComponents/Jumbotron/Jumbotron"
import RecipeSearchContainer from "./pages/RecipeSearchContainer/RecipeSearchContainer";
import RecipeSearchGuest from "./pages/RecipeSearchContainer/RecipeSearchGuest";
import Footer from "./components/HomeComponents/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/RecipePage/RecipePage";
import RecipePageGuest from "./pages/RecipePage/RecipePageGuest";
import TestingPage from "./pages/TestingPage";
import SignUp from "./pages/SignUpLogin/SignUp";
import Login from "./pages/SignUpLogin/Login";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  return (
    <div className="App" data-test="component-app">
      <header>
        {/* <Nav /> */}
        
      </header>
      <main className="mainbody pt-4">
        
        <Router>
          <Jumbotron />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Testing" element={<TestingPage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/RecipePage" element={<RecipePage />} />
              <Route path="/RecipeSearchContainer" element={<RecipeSearchContainer />} />
              <Route path="/RecipePageGuest" element={<RecipePageGuest />} />
              <Route path="/RecipeSearchGuest" element={<RecipeSearchGuest />} />
              <Route path="/Favourites" element={<Favourites />} />
            </Routes>
          </div>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;