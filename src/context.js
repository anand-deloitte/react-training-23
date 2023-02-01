import React from "react";

export const UserConext = React.createContext();

//Provider
//concumer
export default function ContextComp() {
  return (
    <UserConext.Provider value="React context">
      <User />
    </UserConext.Provider>
  );
}

function User() {
  return (
    <UserConext.Consumer>
      <p>This is react Context example</p>
      {(value) => {
        <h1> {value}</h1>;
      }}
    </UserConext.Consumer>
  );
}
