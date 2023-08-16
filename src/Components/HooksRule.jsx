// 1.Always write it inside the function or component
// 2.Component name must be Pascal case
// 3.we can directly import or we can dirctly write it using React.hookname
// 4.dont call hooks inside the loops,conditions or nested functions

import React from "react";
//either you import usestate directly or write React.usestate

const HooksRule = () => {
  //   const [name, setName] = useState("Vedanti");
  const [name, setName] = React.useState("Vedanti");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default HooksRule;
