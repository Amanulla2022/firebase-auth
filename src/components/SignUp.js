import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both email and password!!!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(`Sign up successful! You can sign in now. ${userCredential}`);
      })
      .catch((error) => {
        setErrorMessage("I guess credentials are wrong!!!");
      });
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <form
        onSubmit={signUp}
        className="mt-4 border-2 p-4 m-4 flex flex-col justify-center items-center gap-6 max-w-md w-full mx-auto rounded-lg bg-slate-200"
      >
        <h1 className="text-3xl underline text-teal-800 font-semibold">
          Create Account / <br /> Sign Up
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border-2  min-w-72 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2 border-2  min-w-72 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          type="submit"
          className="bg-purple-500 text-white rounded-3xl p-3 "
        >
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-red-500 ml-1 underline">
            Sign In
          </Link>
        </p>
        <p>
          Please check
          <Link to="/details" className="text-blue-800 ml-1 underline">
            Details
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
