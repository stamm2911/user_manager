import { useRef } from "react";

const styles = {
  fomrCtn: {
    padding: 20,
    width: 500,
    height: "fit-content",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  btn: {
    width: 70,
    height: 30,
    backgroundColor: "#52ADEB",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  inputCtn: {
    width: "100%",
    height: 30,
    border: "1px solid gray",
    borderRadius: "5px",
    margin: "5px 0 15px 0",
    padding: 2,
  },
};

const Form = ({ handleForm }) => {
  let nameRef = useRef();
  let lastNameRef = useRef();
  let mailRef = useRef();

  return (
    <>
      <div style={styles.fomrCtn}>
        <p>Name:</p>
        <input
          type="text"
          placeholder="Name"
          style={styles.inputCtn}
          ref={nameRef}
        />
        <p>Last Name:</p>
        <input
          type="text"
          placeholder="Last Name"
          style={styles.inputCtn}
          ref={lastNameRef}
        />
        <p>Mail:</p>
        <input
          type="text"
          placeholder="Mail"
          style={styles.inputCtn}
          ref={mailRef}
        />
        <input
          type="submit"
          value="Submit"
          style={styles.btn}
          onClick={() => handleForm(nameRef, lastNameRef, mailRef)}
        />
      </div>
    </>
  );
};

export default Form;
