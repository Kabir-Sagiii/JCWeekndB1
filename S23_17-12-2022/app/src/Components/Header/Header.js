import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link className="astyle" to="/profile">
        Profile
      </Link>
      <Link className="astyle" to="/users">
        Users
      </Link>
      <Link className="astyle" to="/context">
        Context API
      </Link>
      <Link className="astyle" to="/cc">
        ClassComponent
      </Link>
      <Link className="astyle" to="/form">
        Controlled-From
      </Link>
      <Link className="astyle" to="/form2">
        UnControlled-From
      </Link>
      <Link className="astyle" to="/redux">
        Redux
      </Link>
      <Link className="astyle" to="/ur">
        useReducer
      </Link>
    </div>
  );
}

export default Header;
