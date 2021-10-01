import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import MovieStats from "./components/MovieStats";

function App() {
  return (
    <div>
      <h1>My Big Movie List</h1>
      <AddMovie></AddMovie>
      <MovieStats></MovieStats>
      <MoviesList></MoviesList>
    </div>
  );
}

export default App;
