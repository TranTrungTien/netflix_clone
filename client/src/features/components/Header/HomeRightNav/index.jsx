import React from "react";
import { useHistory } from "react-router";

const HomeRightNav = () => {
  const history = useHistory();
  const handleSignIn = () => {
    history.push("/sign-in");
  };
  return (
    <div className={`flex items-center justify-center space-x-1 md:space-x-7`}>
      <select
        name="languages"
        className="w-24 h-7 md:w-28 md:h-10 text-white rounded bg-transparent focus:outline-none border border-white"
      >
        <option className="bg-gray-500" value="english">
          English
        </option>
        <option className="bg-gray-500" value="Vietnamese">
          Vietnamese
        </option>
      </select>
      <button
        className="text-sm text-white px-2 md:px-4 py-1 bg-red-E5 rounded-sm md:text-md"
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default HomeRightNav;
