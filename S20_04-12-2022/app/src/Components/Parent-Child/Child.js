import GrandChild from "./GrandChild";
function Child({ info }) {
  var childStyle = {
    textAlign: "center",
    padding: "20px",
    boxShadow: "0 0 10px orangered",
  };
  return (
    <div style={childStyle}>
      <h2>Child Component</h2>
      <p>{info}</p>
      <GrandChild childData={info} />
    </div>
  );
}

export default Child;
