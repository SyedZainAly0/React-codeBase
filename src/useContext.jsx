import React, { createContext, useContext } from "react";

const UserContext = createContext();

function User() {
  return (
    <UserContext.Provider value="Zain">
      <A />
    </UserContext.Provider>
  );
}

function A() {
  return <B />;
}

function B() {
  return <C />;
}

function C() {
  const name = useContext(UserContext);
  return <h1>Hello {name}</h1>;
}

export default User;