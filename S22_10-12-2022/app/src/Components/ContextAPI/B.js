import { useContext } from "react";
import C from "./C";
import myContext from "./Context";

function B(props) {
  const contextData = useContext(myContext);
  var divStyle = {
    margin: "50px auto",
    boxShadow: "0 0 10px green",
    padding: "30px",
    textAlign: "center",
  };
  return (
    <div style={divStyle}>
      <h2>B Component</h2>
      <p>{contextData.name}</p>

      <C />
    </div>
  );
}

export default B;
