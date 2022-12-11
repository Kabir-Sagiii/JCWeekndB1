import "./Card.css";
function Card({ img, name, gender }) {
  var pstyle = {
    textAlign: "center",
  };

  return (
    <div id="card">
      <img src={img} width="100%" height="200" />
      <h4 style={{ textAlign: "center" }}>{name}</h4>
      <p style={pstyle}>{gender}</p>
    </div>
  );
}

export default Card;
