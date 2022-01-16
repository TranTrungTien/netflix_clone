import React from "react";
import Faq from "../../components/FAQ";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="h-auto w-full bg-black overflow-x-hidden">
      <Header />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
