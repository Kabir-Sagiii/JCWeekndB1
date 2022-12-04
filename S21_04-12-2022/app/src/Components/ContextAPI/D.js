import { useContext } from "react";
import myContext from "./Context";

function D(props) {
  const { email } = useContext(myContext);
  var divStyle = {
    margin: "50px auto",
    boxShadow: "0 0 10px blue",
    padding: "30px",
    textAlign: "center",
  };
  return (
    <div style={divStyle}>
      <h2>D Component</h2>
      <p>{email}</p>
    </div>
  );
}

export default D;
