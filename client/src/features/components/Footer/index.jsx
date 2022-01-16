import React from "react";
import PropTypes from "prop-types";

const Footer = ({ backgroundColor }) => {
  return (
    <section
      className={`w-full px-8 py-12 md:px-32 md:py-20 ${backgroundColor}`}
    >
      <div className="text-white-999 text-xs w-full md:w-2/3 mx-auto text-left space-y-6">
        <div className="text-base">
          <span>Question? Call </span>
          <a href="tel:800 852 6334"> 800 852 6334</a>
        </div>
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-3">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="text-base">
          <select className="border border-white px-3 py-3 rounded-sm bg-transparent focus:border-none focus:outline-none">
            <option className=" bg-black" value="English">
              English
            </option>
            <option className=" bg-black" value="Vietnamese">
              Vietnamese
            </option>
          </select>
        </div>
        <div>
          <span className="text-sm">Netflix</span>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  backgroundColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: "",
};

export default Footer;
