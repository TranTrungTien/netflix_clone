import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LeftNav = ({ src, width, height }) => {
  return (
    <div>
      <div className="h-auto w-max">
        <Link to="/">
          <img src={src} alt="Netflix logo" className={`${width} ${height}`} />
        </Link>
      </div>
    </div>
  );
};

LeftNav.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

LeftNav.defaultProps = {
  src: "",
  width: "w-28 md:w-48",
  height: "h-8 md:h-16",
};

export default LeftNav;
