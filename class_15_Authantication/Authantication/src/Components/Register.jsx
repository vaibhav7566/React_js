import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";

const Register = ({ setToggle }) => {
  let { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  let handleRegisterForm = (data) => {

    dispatch(addUser(data));

  // get existing users from localStorage
  // let existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  // add new user
  // existingUsers.push(data);

  // save updated list
  localStorage.setItem('users', JSON.stringify(data));

  alert("User Registered Successfully ✅");
  reset();
  };

  return (
    <div className="flex flex-col w-[25%] bg-white p-[1%] rounded-xl gap-2 shadow-lg ">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className=" w-full flex flex-col w-[25%] bg-white p-[1%] rounded-xl gap-6"
      >
        <h1 className="flex justify-center text-2xl font-medium">
          Register here
        </h1>
        <input
          {...register("username")}
          className="border-2 rounded p-[2%] bg-blue-100 outline-none border-blue-500 "
          type="Username"
          placeholder="Username"
        />
        <input
          {...register("email")}
          className="border-2 rounded p-[2%] bg-blue-100 outline-none border-blue-500"
          type="Email"
          placeholder="Email"
        />
        <input
          {...register("password")}
          className="border-2 rounded p-[2%] bg-blue-100 outline-none border-blue-500"
          type="password"
          placeholder="Enter password"
        />
        <input
          className="border-1 rounded p-[2%] bg-blue-600 text-white font-[30px] font-medium mt-5"
          type="submit"
          value={"Register"}
        />
      </form>

      <div className="flex justify-center">
        <p className="font">
          Already have an account{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-700 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
