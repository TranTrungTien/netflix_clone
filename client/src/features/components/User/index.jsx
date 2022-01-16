import React from "react";
import PropTypes from "prop-types";
import "./user.css";

const User = ({ user }) => {
  return (
    <div className=" cursor-pointer hover:text-gray-100 text-white relative custom-style-user-container">
      <div className="flex items-center space-x-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
          className="w-8 h-8 rounded-sm"
        />
        <i className="fas fa-caret-down"></i>
        <span className="font-semibold">{user?.username}</span>
      </div>
      <div className="absolute top-10 right-0 custom-style-user pl-2 pr-10 py-5 rounded-md text-gray-100 text-sm">
        <div className="flex flex-col justify-center items-start w-max">
          <div className="flex flex-col space-y-2 mb-3">
            <div className="flex justify-start items-center">
              <div className="w-9 h-9 rounded-md overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="user account"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span>Tien</span>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-9 h-9 rounded-md overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="user account"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span>Tien</span>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-9 h-9 rounded-md overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="user account"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span>Tien</span>
            </div>
            <span>Manger Profiles</span>
          </div>
          <hr className="border-white mb-5 w-full" />
          <hr className="border-white mb-5 w-full" />
          <div className="flex flex-col">
            <span className="cursor-pointer hover:underline">Account</span>
            <span className="cursor-pointer hover:underline">Help Center</span>
            <span className="cursor-pointer hover:underline">
              Sign out of Netflix
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

User.defaultProps = {
  user: null,
};

export default User;
