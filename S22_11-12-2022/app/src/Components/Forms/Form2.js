import { useRef } from "react";
import "./Form.css";

function Form2(props) {
  const inputRef = useRef();
  const textRef = useRef();
  const passwordRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    var inputName = inputRef.current.value;
    var inputPassword = passwordRef.current.value;
    textRef.current.style.color = "red";
    console.log(inputName, inputPassword);
    // var inputData = document.getElementById("name").value;
    // var inputPassword = document.getElementById("password").value;

    // console.log(inputData, inputPassword);
  };
  return (
    <div className="formContainer">
      <h2 ref={textRef}>Uncontrolled Forms in React</h2>
      <form onSubmit={handleForm}>
        <div className="formElement">
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            ref={inputRef}
          />
        </div>
        <div className="formElement">
          <input
            ref={passwordRef}
            id="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="formElement">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Form2;
