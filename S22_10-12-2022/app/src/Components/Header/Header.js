import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link className="astyle" to="/">
        Home
      </Link>
      <Link className="astyle" to="/profile">
        Profile
      </Link>
      <Link className="astyle" to="/users">
        Users
      </Link>
      <Link className="astyle" to="/context">
        Context API
      </Link>
      <Link className="astyle" to="/list">
        List
      </Link>
    </div>
  );
}

export default Header;
