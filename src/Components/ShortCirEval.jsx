import React from "react";
import { useState } from "react";

const ShortCirEval = () => {
  const [demo, setDemo] = useState("left side");
  return (
    <div>
      <h1>
        {demo ||
          "In (or) if demo is not empty consider as true then left side will get printed"}
      </h1>
      <h1>
        {demo &&
          "In (and) if demo is empty consider as false then nothing will get printed but if its not empty then right side will get printed"}
      </h1>
    </div>
  );
};

export default ShortCirEval;
