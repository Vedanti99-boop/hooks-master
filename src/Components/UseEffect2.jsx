import React from "react";
import { useState } from "react";

//cleanup function refere video

const UseEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  return (
    <div className="container">
      <h1>The actual size of window is:{widthCount}</h1>
    </div>
  );
};

export default UseEffect2;
