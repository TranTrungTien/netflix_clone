import React from "react";
import PropTypes from "prop-types";

const Feature = ({ title, imagesURL, description, index }) => {
  return (
    <section className="w-full h-auto border-b-8 border-black-222 md:px-12 md:py-16">
      <div
        className={`py-12 md:py-0 px-5% text-center md:w-1100 md:h-352 flex flex-col ${
          index % 2 === 0 ? "md:flex-row" : " md:flex-row-reverse"
        } justify-center items-center mx-auto`}
      >
        <div className="text-white md:px-7 md:w-55%">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg leading-tight md:text-2xl font-normal">
            {description}
          </p>
        </div>
        <div className="pt-5 md:w-45% md:px-7 h-full">
          <img
            src={imagesURL}
            alt="Tv"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

Feature.propTypes = {
  index: PropTypes.number,
};

Feature.defaultProps = {
  index: 0,
};

export default Feature;
