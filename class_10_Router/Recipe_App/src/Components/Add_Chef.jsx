import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Mystore } from "../Context/Mycontext";
import { useNavigate } from "react-router";

const Add_Chef = () => {
  let navigate = useNavigate();

  let {register,handleSubmit,reset} = useForm();

  let {setChefdata,chefdata} = useContext(Mystore)

  let onsubmit = (data) => {
console.log(data);
let updatedChefArr = [...chefdata,data]
setChefdata(updatedChefArr);
localStorage.setItem("chefdata",JSON.stringify(updatedChefArr));
reset();
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4 py-8 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onsubmit)} className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600">
          Add Chef Details 🍳
        </h2>

        {/* Chef name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Chef's Name
          </label>
          <input
          {...register('chefname')}
            type="text"
            placeholder="Enter chef name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Speciality:  */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Speciality:
          </label>
          <textarea
          {...register('speciality')}
            placeholder="About chef's speciality"
            className="w-full px-4 py-2 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
        </div>

        {/* Experience: */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Experience:
          </label>
          <input
          {...register('experience')}
            type="text"
            placeholder="About chef's Experience"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Chef Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Chef's Image
          </label>
          <input
          {...register('chefimage')}
            type="url"
            accept="image/*"
            placeholder="Image URL"
            className="w-full px-3 py-2 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Awards: */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Awards:
          </label>
          <input
          {...register('awards')}
            type="text"
            placeholder="Chef's Awards"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button onClick={()=>navigate("/chef")}
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
         Click here to add 
        </button>
      </form>
    </div>
  );
};

export default Add_Chef;
