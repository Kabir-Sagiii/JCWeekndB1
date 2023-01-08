import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var cardStyle = {
  width: "300px",
  padding: "20px",
  margin: "50px auto",
  boxShadow: "0 0 10px black",
  textAlign: "center",
};

function UserDetails(props) {
  const [state, setState] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    fetch(`http://localhost:5001/users/specificuserdata/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setState(data.results);
      });
  };

  return (
    <div>
      {state.length > 0 ? (
        <div style={cardStyle}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-512.png"
            width="100%"
            height="300"
          />
          <h3>{state[0].name}</h3>
          <h4>{state[0].gender}</h4>
          <h4>{state[0].email}</h4>
          <h4>{state[0].city}</h4>
          <h4>{state[0].phone}</h4>
        </div>
      ) : (
        <div> Data is not available </div>
      )}
    </div>
  );
}

export default UserDetails;
