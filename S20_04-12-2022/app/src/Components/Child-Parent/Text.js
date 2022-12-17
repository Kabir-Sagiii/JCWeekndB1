import Input from "./Input";
import { useState } from "react";
function Text({ info }) {
  const [state, setState] = useState("No Data");
  var childStyle = {
    textAlign: "center",
    padding: "30px",
    boxShadow: "0 0 10px orangered",
    width: "500px",
    margin: "50px auto",
  };

  return (
    <div style={childStyle}>
      <h2>Parent Component</h2>
      <p>{state}</p>
      <Input method={setState} />
    </div>
  );
}

export default Text;
