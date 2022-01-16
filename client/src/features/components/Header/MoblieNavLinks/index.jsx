import React from "react";
import Input from "../../Input";
import Logout from "../../Logout";
import User from "../../User";
import NavLinks from "../NavLink";
import "./MobileNavLinks.css";

const MobileNavLinks = () => {
  const user = {
    username: "Tran Trung Tien",
  };
  return (
    <div className="fixed top-0 left-0 w-2/3 h-screen z-positive mobile-nav-background pl-3 pt-14 space-y-4">
      <User user={user} />
      <Input isMobile={true} />
      <NavLinks isMobile={true} />
      <Logout />
    </div>
  );
};

export default MobileNavLinks;
