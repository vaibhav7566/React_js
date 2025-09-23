import React from "react";

const Usercard = ({name,email,image,contact,id,deletehandler}) => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition duration-200 m-5">
      {/* Image */}
      <img
        src= {image}
        alt= ""
        className="w-full h-40 object-cover p-3 rounded-3xl"
      />

      {/* User Info */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Name:{name}</h2>
        <p className="text-gray-800 text-xl font-bold">Email:{email}</p>
        <p className="text-gray-800 font-bold text-xl">Contact:{contact}</p>

        <button onClick={() => deletehandler(id)} className="px-3 py-2 bg-red-600 rounded-2xl mt-3 font-bold">Delete</button>
      </div>
    </div>
  );
};

export default Usercard;
