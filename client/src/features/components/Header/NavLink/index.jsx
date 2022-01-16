import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinks = ({ isMobile }) => {
  const mobileStyles = "flex-col space-y-3";
  const desktopStyles = "flex-1 items-center space-x-5 ml-7";
  return (
    <ul
      className={`flex ${isMobile ? mobileStyles : desktopStyles} 
     text-semibold text-gray-300`}
    >
      <li>
        <NavLink
          className="hover:text-gray-100"
          activeStyle={{ color: "#fff" }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-gray-100"
          activeStyle={{ color: "#fff" }}
          to="/browser/tvshow"
        >
          TV Shows
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-gray-100"
          activeStyle={{ color: "#fff" }}
          to="/browser/movies"
        >
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-gray-100"
          activeStyle={{ color: "#fff" }}
          to="/browser/newandpopular"
        >
          {"New & Popular"}
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-gray-100"
          activeStyle={{ color: "#fff" }}
          to="/mylist"
        >
          My List
        </NavLink>
      </li>
      {isMobile && (
        <li>
          <NavLink
            className="hover:text-gray-100"
            activeStyle={{ color: "#fff" }}
            to="/switch"
          >
            Switch Accounts
          </NavLink>
          <i className="ml-3 fas fa-arrow-right"></i>
        </li>
      )}
    </ul>
  );
};

NavLinks.propTypes = {
  isMobile: PropTypes.bool,
};

NavLinks.defaultProps = {
  isMobile: false,
};

export default NavLinks;
