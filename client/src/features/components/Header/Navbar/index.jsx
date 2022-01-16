import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const Navbar = ({ height, padding_y, padding_x, children }) => {
  const [navColor, setNavColor] = useState("bg-transparent");
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset !== 0 && navColor === "bg-181818") {
        return;
      } else if (window.pageYOffset !== 0 && navColor === "bg-transparent") {
        setNavColor("bg-181818");
      }
      if (window.pageYOffset === 0) {
        setNavColor("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navColor]);
  return (
    <nav className={`w-full ${height} ${padding_y} ${navColor}`}>
      <div className={`flex justify-between items-center px-2 ${padding_x}`}>
        {Array.isArray(children)
          ? children && children.map((child) => child)
          : children}
      </div>
    </nav>
  );
};
Navbar.propsTypes = {
  height: PropTypes.string,
  padding_x: PropTypes.string,
  padding_y: PropTypes.string,
};
Navbar.defaultProps = {
  height: "",
  padding_x: "",
  padding_y: "",
};
export default Navbar;
