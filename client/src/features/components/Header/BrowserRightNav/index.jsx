import React from "react";

const BrowserRightNav = () => {
  return (
    <div className={`text-gray-50 flex flex-row items-center space-x-3`}>
      <span className="hidden md:inline-block text-sm">
        {"UNLIMITED TV PROGRAMMES & FILMS"}
      </span>
      <button className="bg-red-E5 px-5 py-2  rounded-sm text-sm">
        JOIN NOW
      </button>
      <button className="px-5 py-2  bg-transparent border rounded-sm border-white text-sm hover:bg-gray-600">
        SIGN IN
      </button>
    </div>
  );
};

export default BrowserRightNav;
