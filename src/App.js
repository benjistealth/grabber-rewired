import "./App.css";
import Nav from "./components/home/Nav";
import Jumbotron from "./components/home/Jumbotron";
import RecipeSearchContainer from "./pages/RecipeSearchContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <div className="App" data-test="component-app">
      <header>
        <Nav />
        <Jumbotron />
      </header>
      <Router>
        <main>
          <RecipeSearchContainer />
          <Routes>
            <Route path="/" element={<RecipePage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
