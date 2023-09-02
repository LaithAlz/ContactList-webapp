import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="contacts-list-h1">Contacts List</h1>
      </Link>
      <Link to="/addContact">
        <button className="addContact">
          <FontAwesomeIcon className="icon" icon={faPlus} />
        </button>
      </Link>
    </div>
  );
};

export default Header;
