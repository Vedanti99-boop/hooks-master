//renders everytime when state gets updated

import React from "react";
import { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 1,
      name: "naruto",
      age: 21,
    },
    {
      id: 2,
      name: "Luffy",
      age: 20,
    },
    {
      id: 3,
      name: "takemitchy",
      age: 22,
    },
  ];
  const [Array, setArray] = useState(bioData);

  const clearArray = () => {
    setArray([]);
  };
  const removeEle = (id) => {
    // alert(id);
    const myNewArray = Array.filter((curEle) => {
      return curEle.id !== id;
    });

    setArray(myNewArray);
  };
  return (
    <>
      {Array.map((curEle) => {
        return (
          <h1 key={curEle.id}>
            name:{curEle.name} & age:{curEle.age}
            <button onClick={() => removeEle(curEle.id)}>Remove</button>
          </h1>
        );
      })}

      {/* or */}

      {/* {Array.map((curEle) => (
        <h1 key={curEle.id}>
          name:{curEle.name} & age:{curEle.age}
        </h1>
      ))} */}

      <button onClick={clearArray}>Clear</button>
    </>
  );
};

export default UseStateArray;
