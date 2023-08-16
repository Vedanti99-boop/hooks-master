//useeffect is nothing but the combination of compnentdidmount,didupdate,willunmount
//1st gets render when we run the code after that whenever u'll call any thing which is using usestate eg we are using it through btn it will get render again
import React, { useEffect } from "react";
import "./UseEffect1.css";
import { useState } from "react";

const UseEffect1 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.title = `chats(${count})`;
    } else {
      document.title = "chats";
    }
    console.log("yes");
  }, [count]);

  //this [] is nothing but consider as dependency list of use effect when we use it ,it only renders when we want him to get render
  //as we want it to get render for every count so we have pass count to it if we dont pass anything then it will only get render
  //at 1st not everytime

  return (
    <div className="container1">
      <h3 className="text-center mar">{count}</h3>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Click me😁
        </button>
      </div>
    </div>
  );
};

export default UseEffect1;

//try to give cleanup functions as well with useeffect hook
