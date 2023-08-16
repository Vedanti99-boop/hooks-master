import React, { useContext } from "react";
import { Biodata } from "./ComA";

const ComC = () => {
  const passedData = useContext(Biodata);
  return <div>Data from Com1 in ComC:{passedData}</div>;
};

export default ComC;
