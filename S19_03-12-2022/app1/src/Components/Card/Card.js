import "./Card.css";
function Card(props) {
  var pstyle = {
    textAlign: "center",
  };

  return (
    <div id="card">
      <img src={props.img} width="100%" height="200" />
      <h4 style={{ textAlign: "center" }}>{props.name}</h4>
      <p style={pstyle}>{props.gender}</p>
    </div>
  );
}

export default Card;
