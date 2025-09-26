import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ setToggle, setUsersdata, usersdata }) => {
  let { register, handleSubmit, reset } = useForm();

  let handleRegisterForm = (data) => {
    // console.log(data);
    let updatedArr = [...usersdata, data];
    setUsersdata(updatedArr);
    localStorage.setItem("Usersdata", JSON.stringify(updatedArr));
    alert("User Registered Successfully ✅")
    reset();
  };

  return (
    <div className="flex flex-col w-[25%] bg-white p-[1%] rounded-xl gap-2 shadow-lg ">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className=" w-full flex flex-col w-[25%] bg-white p-[1%] rounded-xl gap-6"
      >
        <h1 className="flex justify-center text-2xl font-medium">Register here</h1>
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
