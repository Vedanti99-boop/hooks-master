// Rest Parameter collects all remaining elements into an array. Spread Operator expands collected elements such as arrays into single elements.

import React from "react";

const UseStateObject = () => {
  const [object, setObject] = React.useState({
    name: "zoro",
    age: 23,
  });

  const change = () => {
    setObject({
      ...object,
      name: "robin",
    });
  };
  return (
    <div>
      <h1>
        Name: {object.name} and age: {object.age}
      </h1>
      <button onClick={change}>update</button>
    </div>
  );
};

export default UseStateObject;
