import NumbersContainer from "./components/NumbersApp/NumbersContainer";
import { Route } from 'react-router-dom';
import Home from "./components/NumbersApp/Home";
import Users from "./components/NumbersApp/Users";

function App() {
  return (
    <div >
      <h1>Random Number Generator</h1>
      <NumbersContainer></NumbersContainer>
      <Route path="/" component={Home} exact></Route>
      <Route path="/users" component={Users}></Route>
    </div>
  );
}

export default App;
