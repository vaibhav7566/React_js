import React, { useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-200">
      {" "}
      {toggle ? <Login setToggle={setToggle}/> : <Register setToggle={setToggle} />}{" "}
    </div>
  );
};

export default AuthLayout;
