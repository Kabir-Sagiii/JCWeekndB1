import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const handleForm = (e) => {
    e.preventDefault();

    console.log(data);
  };
  return (
    <div className="formContainer">
      <h2>Controlled Forms in React</h2>
      <form onSubmit={handleForm}>
        <div className="formElement">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(event) => {
              setData({
                ...data,
                name: event.target.value,
              });
            }}
          />
        </div>
        <div className="formElement">
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              setData({
                ...data,
                password: event.target.value,
              });
            }}
          />
        </div>
        <div className="formElement">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
