import React from "react";
import HomeRightNav from "./HomeRightNav";
import LeftNav from "./LeftNav";
import Navbar from "./Navbar";

const style = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(./images/banner.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Header = () => {
  return (
    <header
      style={style}
      className="w-full h-560 md:h-750  border-b-8 border-black-222"
    >
      <Navbar height="h-24" padding_y="pt-6 md:pt-5" padding_x="md:px-14">
        <LeftNav
          src="./images/logo.png"
          width="w-28 md:w-48"
          height="h-8 md:h-16"
        />
        <HomeRightNav />
      </Navbar>
      <div className="text-white w-full h-full text-center -mt-6 md:-mt-12">
        <div className="w-full px-4 pt-10 md:p-0 md:w-max mx-auto h-full flex flex-col justify-start md:justify-center space-y-4 md:space-y-5">
          <h2 className="text-2xl md:text-6xl font-semibold">
            Unlimited films, TV <br /> programmes and more.
          </h2>
          <h4 className="text-lg font-medium md:text-2xl">
            Watch anywhere, Cancel at anytime.
          </h4>
          <span className="text-lg font-medium md:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className=" space-y-4 md:space-y-0 text-white text-base md:text-3xl h-28 md:w-743 md:h-16 flex md:flex-row flex-col justify-center items-center">
            <input
              className="w-full text-black text-base md:w-2/3 h-full focus:border-none focus:outline-none px-2 rounded-sm"
              type="email"
              placeholder="Email Address"
            />
            <button className="w-1/3 mx-auto h-full bg-red-E5 font-medium rounded-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
