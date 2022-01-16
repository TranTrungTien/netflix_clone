import React, { useState } from "react";

const Form = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (event) => {
    setSignInInfo({ ...signInInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit");
    console.log("user :", signInInfo);
  };
  return (
    <div
      className="text-white w-450 h-660 mx-auto rounded-sm mb-20"
      style={{ background: "rgba(0,0,0,0.8)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full h-full px-16 py-16 flex flex-col"
      >
        <h1 className="text-3xl text-gray-300 font-semibold pb-8">Sign In</h1>
        <div className="flex flex-col text-gray-300 text-sm">
          <input
            type="email"
            name="email"
            className="w-full h-12 rounded-sm px-3 bg-black-333 focus:border-none focus:outline-none"
            placeholder="Email or phone number"
            onChange={handleChangeInput}
          />
          <input
            type="password"
            name="password"
            className="w-full h-12 rounded-sm px-3 bg-black-333 mt-4  focus:border-none focus:outline-none"
            placeholder="Password"
            onChange={handleChangeInput}
          />
          <p className="text-sm text-red-700 hidden">Error Show Here</p>
          <button className="text-base w-full h-12 bg-red-E5 rounded-sm font-bold mt-8 ">
            Sign In
          </button>
        </div>
        <div className="flex flex-col mt-5 text-xs text-gray-400 font-light">
          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember me" className="w-4 h-4" />{" "}
              <label htmlFor="remember me">Remember me</label>
            </div>
            <span>
              <a className="hover:underline" href="/help">
                Need help?
              </a>
            </span>
          </div>
          <div className="text-2xl text-blue-800 py-4">
            <i className="fab fa-facebook-square bg-white mr-3"></i>
            <a className="text-xs text-gray-400" href="/fb">
              Login with Facebook
            </a>
          </div>
          <div className="text-base mb-3">
            <span>New to Netflix?</span>{" "}
            <a href="/sign-up" className="text-gray-200">
              Sign up now
            </a>
          </div>
          <div>
            <span>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>
            <a className="text-blue-700 hover:underline" href="/captcha">
              Learn more
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
