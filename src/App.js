import Form from "./Components/Form";
import Users from "./Components/Users";
import { useState } from "react";

const styles = {
  appCtn: {
    position: "absolute",
    width: "100%",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

function App() {
  const [userState, setUserState] = useState([]);

  const handleForm = (nameRef, lastNameRef, mailRef) => {
    const newuser = `${nameRef.current.value} ${lastNameRef.current.value} ${mailRef.current.value}`;
    const newArr = [...userState, newuser];
    setUserState(newArr);
    nameRef.current.value = "";
    lastNameRef.current.value = "";
    mailRef.current.value = "";
  };

  return (
    <div style={styles.appCtn}>
      <Form handleForm={handleForm} />
      <Users userState={userState} />
    </div>
  );
}

export default App;
