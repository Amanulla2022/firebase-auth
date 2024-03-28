import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  useEffect(() => {
    const rememberMeUser = localStorage.getItem("rememberMeUser");
    if (rememberMeUser) {
      setEmail(rememberMeUser);
    }
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both email and password!!!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (rememberMe) {
          localStorage.setItem("rememberMeUser", email);
        } else {
          localStorage.removeItem("rememberMeUser");
        }
        alert("Logged in successfully!");
      })
      .catch((error) => {
        setErrorMessage("First Sign Up then sign in :)");
      });
  };

  const handleResetPassword = () => {
    if (!email) {
      setErrorMessage("Please enter your email address!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetEmailSent(true);
      })
      .catch((error) => {
        setErrorMessage(
          "Failed to send password reset email. Please try again later."
        );
      });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div>
      <form
        onSubmit={signIn}
        className="mt-4 border-2 p-4 m-4 flex flex-col justify-center items-center gap-6 max-w-md w-full mx-auto rounded-lg bg-slate-400"
      >
        <h1 className="text-3xl underline text-teal-800 font-semibold">
          Sign In
        </h1>
        <input
          type="email"
          placeholder="Enter your email..."
          className="p-2 border-2  min-w-72 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2 border-2  min-w-72 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-purple-500 text-white rounded-3xl p-3 "
        >
          Sign In
        </button>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            onChange={handleRememberMeChange}
            className="mr-2"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <p>
          Don't have an account?
          <Link to="/signup" className="text-red-500 ml-1 underline">
            Sign Up
          </Link>
        </p>
        <p>
          Please check
          <Link to="/details" className="text-blue-800 ml-1 underline">
            Details
          </Link>
        </p>
        <p>
          <Link
            to="#"
            onClick={handleResetPassword}
            className="text-teal-800 font-semibold underline ml-1"
          >
            Forgot your password?
          </Link>
        </p>
      </form>
      <div className="flex flex-col items-center">
        {errorMessage && (
          <p className="text-red-500 text-xl text-center">{errorMessage}</p>
        )}

        {resetEmailSent && (
          <p className="text-green-500">
            Password reset email sent. Please check your inbox.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
