// react router
import { Link } from "react-router-dom";

// styles
import "./Navbar.css";

// components
import Searchbar from "../Searchbar/Searchbar";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const {color} = useTheme();

  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe Hub</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
