import "./App.css";
import Nav from "./components/home/Nav";
import Jumbotron from "./components/home/Jumbotron";
import RecipeContainer from "./pages/RecipeSearchContainer";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Jumbotron />
      </header>
      <main>
        <RecipeContainer />
      </main>
    </div>
  );
}

export default App;
