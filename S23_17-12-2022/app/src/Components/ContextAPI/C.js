import { useContext } from "react";
import D from "./D";
import myContext from "./Context";

function C(props) {
  const data = useContext(myContext);

  var divStyle = {
    margin: "50px auto",
    boxShadow: "0 0 10px red",
    padding: "30px",
    textAlign: "center",
  };
  return (
    <div style={divStyle}>
      <h2>C Component</h2>
      <p>{data.city}</p>
      <D />
    </div>
  );
}

export default C;
