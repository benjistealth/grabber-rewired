import "./App.css";
// import Nav from "./components/home/Nav";
import Jumbotron from "./components/home/Jumbotron";
import RecipeSearchContainer from "./pages/RecipeSearchContainer";
import Footer from "./components/home/Footer";
// import TestingPage from "./pages/TestingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
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
      <main>
        <Router>
          <div>
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route path="/RecipeSearchContainer" element={<RecipeSearchContainer />} />
              <Route path="/" element={<Home />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Testing" element={<TestingPage />} />
              {/* <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} /> */}
              {/* <Route path="/RecipeSearchContainer" element={<RecipeSearchContainer />} /> */}
              <Route path="/RecipePage" element={<RecipePage />} />
              {/* Define a route that will have descendant routes */}
              {/* <Route path="contact/*" element={<Contact />} /> */}
            </Routes>
          </div>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;