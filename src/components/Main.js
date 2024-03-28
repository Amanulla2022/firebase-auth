import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Details from "./Details";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default Main;
