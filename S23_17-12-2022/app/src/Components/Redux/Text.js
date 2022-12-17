import React from "react";
// import myStore from "./Store";
import { useSelector } from "react-redux";

function Text(props) {
  //   let storeData = myStore.getState();

  let data = useSelector((storedata) => {
    return storedata;
  });

  var divStyle = {
    padding: "5px 100px",
  };
  return (
    <div style={divStyle}>
      <h2>Text Component</h2>
      <p>NAME: {data.myReducer.name}</p>
      <p>CITY : {data.cityReducer.cityname}</p>
    </div>
  );
}

export default Text;
