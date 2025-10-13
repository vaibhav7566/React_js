import { HardHat } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Mystore } from "../Context/Mycontext";

const Chef = () => {
  const [chefs, setChefs] = useState([
    {
      chefname: "Chef Arjun Mehta",
      speciality: "Indian Cuisine, Street Food Fusion",
      experience: "12 years",
      awards: "MasterChef India Finalist 2018, Times Food Award 2021",
      chefimage: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    {
      chefname: "Chef Lisa Fernandes",
      speciality: "Italian & Mediterranean Dishes",
      experience: "10 years",
      awards: "Best Italian Chef 2020, Olive Crown Culinary Star",
      chefimage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      chefname: "Chef Rohan Kapoor",
      speciality: "Pastries, Desserts & Chocolates",
      experience: "8 years",
      awards: "Chocolate Artistry Champion 2022",
      chefimage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
  ]);

  let { chefdata } = useContext(Mystore);

  let navigate = useNavigate();

  return (
    <div className="max-w-8xl h-full mx-auto px-5 sm:px-6 lg:px-8 mt-9 ">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 w-full mb-10 bg-gray-100 shadow-md rounded-2xl px-6 py-4">
        <div className="flex items-center gap-4 sm:flex-1">
          <HardHat size={28} className="animate-bounce mt-3" />
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800">
            Meet Our Chef's
          </h1>
        </div>

        <button
          className="w-full sm:w-auto sm:flex-none px-8 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => navigate("/Add_Chef")}
        >
          Add Chef
        </button>
      </div>

      <div className=" flex-wrap bg-white w-[100%] gap-5 rounded-2xl py-3 overflow-hidden transform hover:scale-100 transition-all duration-300 flex flex-row">
        {chefdata.map((chef, i) => (
          <div
            key={i}
            className="bg-white w-full sm:w-1/2 md:w-[32.4%] rounded-2xl shadow-xl overflow-hidden transform hover:scale-102 duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56 md:h-64">
              <img
                src={chef.chefimage}
                alt={chef.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[#4f39f6]">
                  {chef.name}
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-semibold">Speciality:</span>{" "}
                  {chef.speciality}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  <span className="font-semibold">Experience:</span>{" "}
                  {chef.experience}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  <span className="font-semibold">Awards:</span> {chef.awards}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="mt-4 bg-[#4f39f6] text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-[#3b2dd3] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
