import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div >
        
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign in</h1>
          <input
            className="p-4 my-4 w-full"
            type="email"
            placeholder="Email or Phone Number"
          />
          <input className="p-4 my-4 w-full" type="password" placeholder="Password" />
          <button className="bg-red-700 p-4 my-4 w-full">Sign in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
