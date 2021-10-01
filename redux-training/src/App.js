import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions/countActions';
import Btn from './Btn';
import ShowCount from './ShowCount';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  
  return (
    <div >
      <h1>React Training</h1>
      <h2>Count - {count}</h2>
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <Btn></Btn>
      <hr />
      <ShowCount></ShowCount>
    </div>
  );
}

export default App;
