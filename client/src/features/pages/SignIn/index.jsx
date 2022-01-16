import React from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Navbar from "../../components/Header/Navbar";

const SignIn = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./images/home-bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col"
    >
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
};

export default SignIn;
