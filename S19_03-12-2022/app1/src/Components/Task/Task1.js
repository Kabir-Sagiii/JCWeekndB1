import { useState } from "react";

function Task1() {
  let [state, setState] = useState("Welcome to React");

  //   var data = "Welcome to React JS Components";

  function changeContent() {
    setState("Hello React");

    // console.log(data);
    // data = "Hello JS";
    // console.log(data);
  }

  return (
    <div>
      <h2> {state}</h2>
      <button onClick={changeContent}>Change Content</button>
    </div>
  );
}

export default Task1;
