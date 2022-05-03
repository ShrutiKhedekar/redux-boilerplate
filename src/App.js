import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

function App() {
  const { counter, isLogged } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      Counter {counter}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
