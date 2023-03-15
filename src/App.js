import "./App.css";
import Nav from "./components/home/Nav";
import Jumbotron from "./components/home/Jumbotron";
import RecipeSearchContainer from "./pages/RecipeSearchContainer";

function App() {
  return (
    <div className="App" data-test="component-app">
      <header>
        <Nav />
        <Jumbotron />
      </header>
      <main>
        <RecipeSearchContainer />
      </main>
    </div>
  );
}

export default App;
