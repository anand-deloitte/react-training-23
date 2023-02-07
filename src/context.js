import React from "react";

export const UserContext = React.createContext();

export default function ContextComponent() {
  return (
    <UserContext.Provider value="Blue and red">
      <User />
    </UserContext.Provider>
  );
}

function User() {
  return (
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
    <UserBadge></UserBadge>
  );
}

function UserBadge() {
  return (
    <p>
      {" "}
      value inside User UserBadge{" "}
      <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
    </p>
  );
}
