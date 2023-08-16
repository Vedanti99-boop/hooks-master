import React from "react";
import { useState } from "react";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { email: email, password: password };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <>
      <h2 className="text-center my-5">Form</h2>
      <div>
        <form className="container" action="" onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div>
          {/* map used for looping */}
          {allEntry.map((curEle) => {
            return (
              <div>
                <p>{curEle.email}</p>
                <p>{curEle.password}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Forms;

// In general, if you have a simple form with few inputs and straightforward requirements, an uncontrolled form might be
//  a suitable choice.However, if you have a complex form with validations, conditional logic, or the need for data manipulation,
//  a controlled form provides more flexibility and control.
