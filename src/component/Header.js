import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;