import React from "react";
import { useState } from "react";
import Card from "./Card";

const WayThree = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  // console.log(formdata);
  // let setFormdataHandler = (e) => {
  //     setFormdata({...formdata,name:e.target.value})
  //     console.log(e)
  // }

  console.log(formdata);
  let setFormdataHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    // console.log(e)
  };

  const [data, setData] = useState([]);

  let submitHandler = (e) => {
    e.preventDefault();
    setData((data) => [...data, formdata]);

    setFormdata({
      name: "",
      email: "",
      password: "",
    });
  };

  console.log("Submitted data ->", data);

  return (
    <div>
      <div className="bg-zinc-300 w-fit p-5 m-10 rounded-2xl shadow-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              value={formdata.name}
              onChange={setFormdataHandler}
              type="text"
              placeholder="Enter Name"
              className="m-3 border-1 rounded-2xl p-2"
            />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              value={formdata.email}
              onChange={setFormdataHandler}
              type="text"
              placeholder="Example@gmail.com"
              className="m-3 border-1 rounded-2xl p-2"
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              value={formdata.password}
              onChange={setFormdataHandler}
              type="text"
              placeholder="*********"
              className="m-3 border-1 rounded-2xl p-2"
            />
          </div>

          <button className="m-3  rounded-2xl p-2 px-4 bg-black text-white active:scale-95 transition-transform duration-100">
            Submit
          </button>
        </form>
      </div>

      <div className="flex  flex-wrap ml-7">
        {data.map(function (val, index) {
          return (
            <Card
              key={index}
              name={val.name}
              email={val.email}
              password={val.password}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WayThree;
