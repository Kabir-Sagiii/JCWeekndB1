import { useState } from "react";
import B from "./B";
import myContext from "./Context";

function A(props) {
  const [state, setState] = useState({
    name: "Kabir",
    city: "Mumbai",
    email: "K@gmail.com",
  });
  var parentStyle = {
    width: "500px",
    margin: "50px auto",
    boxShadow: "0 0 10px black",
    padding: "30px",
    textAlign: "center",
  };
  return (
    <div style={parentStyle}>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState({
            name: "Sneha",
            city: "Pune",
            email: "Sneha@gmail.com",
          });
        }}
      >
        Send Data
      </button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
