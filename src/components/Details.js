import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Details = () => {
  const [authUser, setAuthUser] = useState(null);
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setSignedUp(true);
      } else {
        setAuthUser(null);
        setSignedUp(false);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-4 border-2 p-4 m-4 flex flex-col justify-center items-center gap-6 max-w-md w-full mx-auto rounded-lg bg-slate-200">
      {authUser ? (
        <>
          <p className="text-green-500 text-medium">{`Signed In as ${authUser.email}`}</p>
          <button
            className="bg-purple-500 text-white rounded-3xl p-3 "
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <p className="text-center text-2xl font-medium mt-8">
          You have <span className="text-red-500">Signed Out!!!</span>
        </p>
      )}
      <div className="flex flex-col justify-center items-center gap-8 my-6">
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-red-500 ml-1 underline">
            Sign In
          </Link>
        </p>
        <p>
          Don't have an account?
          <Link to="/signup" className="text-red-500 ml-1 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Details;
