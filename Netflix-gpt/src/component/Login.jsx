import React, { useState, useRef } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSingnInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSingnInForm(!isSignInForm); // if it is true then setFunction will be false
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate form data

    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    SetErrorMessage(message); // used to dynamically print the error message
    if (message) return;
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode+ "-"+ errorMessage)
        });
    } else{
      //sign in logic from documnetation
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrorMessage(errorCode+ "-"+ errorMessage)
  });

    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()} //preventing the form from submiting automatically
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign in " : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 my-4 w-full bg-gray-600"
              type="text"
              placeholder="Full name"
            />
          )}

          <input
            ref={email}
            className="p-4 my-4 w-full bg-gray-600"
            type="email"
            placeholder="Email or Phone Number"
          />
          <input
            ref={password}
            className="p-4 my-4 w-full bg-gray-600"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="bg-red-700 p-4 my-4 w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now "
              : "Already registered ? sign in now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
