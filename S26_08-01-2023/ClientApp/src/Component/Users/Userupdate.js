import { useState, useEffect } from "react";
import "./NewUser.css";
import { useParams } from "react-router-dom";

function UpdateUser(props) {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    image: "",
    city: "",
  });

  useEffect(() => {}, []);

  const sendData = () => {};

  return (
    <div className="formContainer">
      <h2>Update User Details</h2>
      <div>
        <input
          type="text"
          value={user.name}
          placeholder="Enter Name"
          onChange={(event) => {
            setUser({
              ...user,
              name: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          value={user.email}
          type="text"
          placeholder="Enter Email"
          onChange={(event) => {
            setUser({
              ...user,
              email: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={user.city}
          placeholder="Enter City"
          onChange={(event) => {
            setUser({
              ...user,
              city: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter User Image URL"
          value={user.image}
          onChange={(event) => {
            setUser({
              ...user,
              image: event.target.value,
            });
          }}
        />
      </div>
      <div>
        Male:{" "}
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(event) => {
            setUser({
              ...user,
              gender: event.target.value,
            });
          }}
        />
        Female:{" "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(event) => {
            setUser({
              ...user,
              gender: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={sendData}>Update User</button>
      </div>
    </div>
  );
}

export default UpdateUser;
