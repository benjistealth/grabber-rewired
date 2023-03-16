import "./App.css";
import Nav from "./components/home/Nav";
import Jumbotron from "./components/home/Jumbotron";
import RecipeSearchContainer from "./pages/RecipeSearchContainer";
// import TestingPage from "./pages/TestingPage";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RecipePage from "./pages/RecipePage";
// import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <div className="App" data-test="component-app">
      <header>
        <Nav />
        <Jumbotron />
      </header>
      <main>
        <RecipeSearchContainer />
        {/* <RecipePage /> */}
        {/* <TestingPage /> */}
      </main>
    </div>
  );
}

export default App;
