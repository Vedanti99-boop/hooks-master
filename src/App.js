import { useState } from "react";
import "./App.css";
import HooksRule from "./Components/HooksRule";
import UseStateArray from "./Components/UseStateArray";
import UseStateObject from "./Components/UseStateObject";
import ShortCirEval from "./Components/ShortCirEval";
import Forms from "./Components/Forms";
import UseEffect1 from "./Components/UseEffect1";
import UseEffect2 from "./Components/UseEffect2";
import UseEffectApi from "./Components/UseEffectApi";
import UseReducer from "./Components/UseReducer";
import ComB from "./Components/UseContext/ComB"; 
import  useContext2  from "./Components/UseContext2"; 
import UseRef from "./Components/UseRef";
import UseRef2 from "./Components/UseRef2";
function App(props) {
  // const [text, setText] = useState("I am about to change to");
  // const changeTxt = () => {
  //   text === "I am about to change to"
  //     ? setText("new text")
  //     : setText("I am about to change to");
  // };
  return (
    <>
      <div>
        {/* <h1>{text}</h1>
        <button onClick={changeTxt}>Change the text</button> */}
        {/* <HooksRule></HooksRule> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject /> */}
        {/* <ShortCirEval /> */}
        {/* <Forms /> */}
        {/* <UseEffect1 /> */}
        {/* <UseEffect2 /> */}
        {/* <UseEffectApi /> */}
        {/* <UseReducer /> */}
        {/* <ComB /> */}
        {/* <UseRef/> */}
        <UseRef2/>
        
      </div>
    </>
  );
}

export default App;
