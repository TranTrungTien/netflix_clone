import React from "react";
import PropTypes from "prop-types";

const Input = ({ isMobile }) => {
  const handleInput = () => {
    let input = document.querySelector("#searchInput");
    if (
      input.style.display === undefined ||
      input.style.display === "" ||
      input.style.display === "none"
    ) {
      input.style.display = "inline-block";
    } else if (input.style.display === "inline-block") {
      input.style.display = "none";
    }
  };
  return (
    <div
      className="space-x-2 flex items-center cursor-pointer hover:text-gray-100 text-white"
      onClick={handleInput}
    >
      <input
        type="text"
        id="searchInput"
        name="search"
        placeholder="Search"
        className={`px-2 py-1  bg-transparent rounded-md focus:outline-none border border-gray-300 ${
          !isMobile && "hidden"
        }`}
      />
      {!isMobile && (
        <div className="text-xl">
          <i className="fa fa-search"></i>
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  isMobile: PropTypes.bool,
};

Input.defaultProps = {
  isMobile: false,
};

export default Input;
