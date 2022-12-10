import Child from "./Child";
import { useState } from "react";
function Parent() {
  let [data, setData] = useState("No Data");
  var parentStyle = {
    width: "500px",
    margin: "50px auto",
    boxShadow: "0 0 10px black",
    padding: "30px",
    textAlign: "center",
  };
  const sendDataToChild = () => {
    var inputValue = document.getElementById("input").value;
    setData(inputValue);
  };
  return (
    <div style={parentStyle}>
      <h2>Parent Component</h2>
      <input type="text" placeholder="Enter Some Text" id="input" />
      <button onClick={sendDataToChild}>Submit</button>
      <br />
      <br />
      <Child info={data} />
    </div>
  );
}

export default Parent;
