//generally if there are 3 comp and we need to pass data of comp 1 to comp 3 ,so without using usecontext we would have done it by passing props
//from 1 comp to 2nd and from 2nd to 3rd which is not needed so we use usecontext for that

import React, { createContext } from "react";
import ComC from "./ComC";

const Biodata = createContext();

const ComA = () => {
  return (
    <Biodata.Provider value={"hello comp3 from comp 1"}>
      <div>
        <ComC />
      </div>
    </Biodata.Provider>
  );
};

export default ComA;
export { Biodata };

