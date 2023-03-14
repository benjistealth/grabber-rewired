import './App.css';
import Nav from './components/home/Nav';
import Jumbotron from './components/home/Jumbotron';
import RecipeSearchBar from './components/home/RecipeSearchBar';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Jumbotron />
      </header>
      <main>
        <RecipeSearchBar />
      </main>
    </div>
  );
}

export default App;
