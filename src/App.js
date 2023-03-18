import "./App.css";
import Nav from "./components/home/Nav";
import Jumbotron from "./components/home/Jumbotron";
import RecipeSearchContainer from "./pages/RecipeSearchContainer";
import RecipeSearchGuest from "./pages/RecipeSearchGuest";
import Footer from "./components/home/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import RecipePageGuest from "./pages/RecipePageGuest";
import TestingPage from "./pages/TestingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" data-test="component-app">
      <header>
        <Nav />
        <Jumbotron />
      </header>
      <main className="mainbody pt-4">
        <Router>
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
            </Routes>
          </div>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;