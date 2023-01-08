import { useState } from "react";
import "./NewUser.css";

function NewUser(props) {
  const [newuser, setNewUser] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    city: "",
  });

  const sendDataToServer = () => {
    console.log(newuser);
    fetch("http://localhost:5001/users/newuser", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert("Inserted Data successfully");
        setNewUser({
          name: "",
          email: "",
          gender: "",
          phone: "",
          city: "",
        });
      })
      .catch((err) => {
        alert("Error While Inserting the data");
      });
  };

  return (
    <div className="formContainer">
      <h2>Register User</h2>
      <div>
        <input
          type="text"
          value={newuser.name}
          placeholder="Enter Name"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              name: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={newuser.email}
          placeholder="Enter Email"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              email: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={newuser.city}
          placeholder="Enter City"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              city: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={newuser.phone}
          placeholder="Enter User Phone Number"
          onChange={(event) => {
            setNewUser({
              ...newuser,
              phone: event.target.value,
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
            setNewUser({
              ...newuser,
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
            setNewUser({
              ...newuser,
              gender: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={sendDataToServer}>Register New User</button>
      </div>
    </div>
  );
}

export default NewUser;
