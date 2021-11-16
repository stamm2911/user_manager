const styles = {
  inputCtn: {
    width: "100%",
    height: 30,
    border: "1px solid gray",
    borderRadius: "5px",
    margin: "5px 0 15px 0",
    padding: 2,
  },
};

const Input = ({inputType}) => {
  return (
    <div>
      <p>{inputType}:</p>
      <input type="text" placeholder={inputType} style={styles.inputCtn}/>
    </div>
  );
};

export default Input;
