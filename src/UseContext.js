import { createContext, useState, useContext, useMemo } from "react";
const UserContextNew = createContext({
  userName: "",
  setUserName: () => {},
});
export default function TestContext() {
  const [userName, setUserName] = useState("John Smith");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <UserContextNew.Provider value={value}>
      {useMemo(
        () => (
          <>
            <UserNameInput />
            <UserInfo />
          </>
        ),
        []
      )}
    </UserContextNew.Provider>
  );
}
function UserNameInput() {
  const { userName, setUserName } = useContext(UserContextNew);
  const changeHandler = (event) => setUserName(event.target.value);
  return <input type="text" value={userName} onChange={changeHandler} />;
}
function UserInfo() {
  const { userName } = useContext(UserContextNew);
  return <span>{userName}</span>;
}
