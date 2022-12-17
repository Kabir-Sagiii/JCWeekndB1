import { useState } from "react";
import myaction from "./myaction";

function Input(props) {
  const [state, setState] = useState("");
  var divStyle = {
    padding: "10px 100px",
  };

  const sendDataToAction = () => {
    myaction(state);
  };
  return (
    <div style={divStyle}>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button onClick={sendDataToAction}>Submit</button>
    </div>
  );
}

export default Input;
