import React, { useReducer } from "react";
import { useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  
  //using useReducer

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container my-5">
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </div>
  );

  //using useState

  //   const [count, setCount] = useState(0);
  //   return (
  //     <div className="container my-5">
  //       <button
  //         onClick={() => {
  //           setCount(count - 1);
  //         }}
  //       >
  //         -
  //       </button>
  //       <h2>{count}</h2>
  //       <button
  //         onClick={() => {
  //           setCount(count + 1);
  //         }}
  //       >
  //         +
  //       </button>
  //     </div>
  //   );
};

export default UseReducer;
