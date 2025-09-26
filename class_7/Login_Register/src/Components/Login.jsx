import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ setToggle, usersdata, setExistingUsers }) => {
  let { register, handleSubmit, reset } = useForm();

  let handleLoginForm = (data) => {
    // console.log(data);
    let userExist = usersdata.filter((user) => {
      if (user.email === data.email && user.password === data.password) {
        return user;
      }
    });

    if (userExist[0] !== undefined) {
      alert("Login Successfully✅");
      setExistingUsers((prev) => [...prev, userExist[0]]);
    } else {
      alert("User not found ❌");
    }

    reset();
  };
  return (
    <div className="flex flex-col w-[25%] bg-white p-[1%] rounded-xl gap-2 shadow-lg ">
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className=" w-full flex flex-col w-[25%] bg-white p-[1%] rounded-xl gap-6"
      >
        <h1 className="flex justify-center text-2xl font-medium mb-3">Login here</h1>
        <input
          {...register("email")}
          className="border-2 rounded p-[2%] bg-blue-100 outline-none border-blue-500"
          type="Email"
          placeholder="Enter your email"
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
          value={"Lets Check"}
        />
      </form>

      <div className="flex justify-center">
        <p className="font">
          Don't have an account ?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-700 cursor-pointer"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
