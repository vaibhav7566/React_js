import React, { useState } from "react";

const Wayone = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    // reset
    setFormData({
      name: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl"
            type="text"
            placeholder="Name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl"
            type="text"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="mx-5 px-3 py-3 border-b-black border-2 my-3 rounded-2xl"
            type="text"
            placeholder="Address"
          />
        </div>

        <button className="border-2 border-amber-300 bg-amber-200 text-2xl font-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Wayone;
