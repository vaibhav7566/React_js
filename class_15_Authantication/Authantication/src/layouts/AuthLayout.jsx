import React, { useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { set } from "react-hook-form";

const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);

  return <div className="w-full h-screen flex items-center justify-center bg-gray-100">{toggle ? <Login setToggle={setToggle}/> : <Register setToggle={setToggle}/>}</div>;

};

export default AuthLayout;
