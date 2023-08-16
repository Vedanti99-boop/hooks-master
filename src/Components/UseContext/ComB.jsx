import React from "react";
import { AppContext } from "../UseContext2";
import { useContext } from "react";

const ComB = () => {
  const userData = useContext(AppContext)
  return <div>ComB {userData.name} {userData.age}</div>;
};

export default ComB;
