import { useState } from "react";
import cityAction from "./cityAction";
import { useDispatch } from "react-redux";

function CityComp(props) {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  var divStyle = {
    padding: "5px 100px",
  };
  const sendDataToAction = () => {
    // alert(city);
    cityAction(city, dispatch);
  };
  return (
    <div style={divStyle}>
      <h2>City Component</h2>
      <select
        onChange={(event) => {
          setCity(event.target.value);
        }}
      >
        <option>Select City</option>
        <option>Delhi</option>
        <option>London</option>
        <option>Manchester</option>
        <option>Sydney</option>
      </select>
      &nbsp;&nbsp;
      <button onClick={sendDataToAction}>Submit</button>
    </div>
  );
}

export default CityComp;
