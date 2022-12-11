function GrandChild(props) {
  var gchildStyle = {
    textAlign: "center",
    padding: "20px",
    boxShadow: "0 0 10px green",
    marginTop: "20px",
  };
  return (
    <div style={gchildStyle}>
      <h2>GrandChild Component</h2>
      <p>{props.childData}</p>
    </div>
  );
}

export default GrandChild;
