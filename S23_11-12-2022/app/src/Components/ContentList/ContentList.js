import { useState, useEffect } from "react";

function ContentList(props) {
  var name = "";
  const [username, setUserName] = useState("");
  const [state, setState] = useState([
    "React",
    "Angular",
    "Java",
    "HTML",
    "JS",
  ]);

  useEffect(() => {
    name = sessionStorage.getItem("name");
    setUserName(name);

    return () => {
      console.log("Function is called befor unmount");
    };
  }, []);

  const updateState = () => {
    setState([...state, "CSS", "Node JS", "Express JS", "Mongodb"]);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>{username} this is List of Technologies</h2>
      <ol>
        {state.map((ele, index) => {
          return <li key={index + 1}>{ele}</li>;
        })}
      </ol>
      <button onClick={updateState}>Update Data</button>
    </div>
  );
}

export default ContentList;
