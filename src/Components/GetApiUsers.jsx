import React from "react";
//instead pf props you can directly write name
const GetApiUsers = ({ users }) => {
  return (
    <div className="container-fluid background">
      <h1 className="mt-5 text-white text-center">Api</h1>
      <div className="row">
        {users.map((curEle) => {
          return (
            <div className="col-4" key={curEle.id}>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={curEle.avatar_url}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" key={curEle.id}>
                        {curEle.login}
                      </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetApiUsers;
