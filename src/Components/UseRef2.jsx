import React, { useRef } from 'react'; // Make sure to import useRef from 'react'
import "./UseRef2.css";

const UseRef2 = () => {
    const inputRef = useRef(); // Use useRef() to create a ref

    const changeTheme = () => {
        // Use inputRef.current to access the DOM node
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "#82E0AA";
    };

    return (
        <div className='main'>
            <div className='sub-main'>
                <input type="text" ref={inputRef} /><br /><br />
                <button onClick={changeTheme}>Submit</button>
            </div>
        </div>
    );
}

export default UseRef2;