function Input(props) {
  var parentStyle = {
    margin: "50px auto",
    boxShadow: "0 0 10px black",
    padding: "20px",
    textAlign: "center",
  };
  const sendDataToTextComp = () => {
    var inputData = document.getElementById("input").value;
    props.method(inputData);
  };
  return (
    <div style={parentStyle}>
      <h2>Child Component</h2>
      <input type="text" placeholder="Enter Some Text" id="input" />
      <button onClick={sendDataToTextComp}>Submit</button>
    </div>
  );
}

export default Input;
