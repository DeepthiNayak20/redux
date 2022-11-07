import Search from "../search/search";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="navBarContainer">
        {" "}
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
