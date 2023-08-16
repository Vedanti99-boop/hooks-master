import React, { useState } from "react";
import { useEffect } from "react";
import "./UseEffect1.css";
import Loading from "./Loading";
import GetApiUsers from "./GetApiUsers";

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log("My error is:" + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <GetApiUsers users={users} />
    </>
  );
};

export default UseEffectApi;
