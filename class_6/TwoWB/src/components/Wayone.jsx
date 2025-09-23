import React, { use, useState } from "react";

const Wayone = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, address);
    setEmail('');
    setAddress('');
    setName('');
  };

  return (
    <div className="flex flex-col ">
      <form onSubmit={(e)=>{submitHandler(e)}} >
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl  "
            type="text"
            placeholder="Name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl"
            type="text"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl"
            type="text"
            placeholder="Address"
          />
        </div>

        <button  className="border-2 border-amber-300 bg-amber-200 text-2xl font-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Wayone;



