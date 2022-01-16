import React from "react";
import PropTypes from "prop-types";
const RightNav = () => {
  return <div></div>;
};

RightNav.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

RightNav.defaultProps = {
  src: "",
  width: "w-28 md:w-48",
  height: "h-8 md:h-16",
};
export default RightNav;
