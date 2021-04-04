// HOC vs Pure Component vs Hooks
// Context API vs useReducer vs HOC vs Redux
import { React, useReducer } from "react"; //From 16.8 version

// Mini Redux
// State tree
const initialState = { count: 10 };

//  reducer
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMNET":
      return { count: state.count - 1 };
  }
}

function ReducerDemo() {
  //Demo has store,reducer, action, initial state
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>UseReducer Demo</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMNET" })}>Decrement</button>
      <h3 className="bg-warning">Count : {state.count}</h3>
    </div>
  );
}

export default ReducerDemo;
