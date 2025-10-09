import { HardHat } from "lucide-react";
import React, { useState } from "react";

const Chef = () => {
  const [chefs] = useState([
    {
      id: 1,
      name: "Chef Arjun Mehta",
      speciality: "Indian Cuisine, Street Food Fusion",
      experience: "12 years",
      awards: "MasterChef India Finalist 2018, Times Food Award 2021",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    {
      id: 2,
      name: "Chef Lisa Fernandes",
      speciality: "Italian & Mediterranean Dishes",
      experience: "10 years",
      awards: "Best Italian Chef 2020, Olive Crown Culinary Star",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      id: 3,
      name: "Chef Rohan Kapoor",
      speciality: "Pastries, Desserts & Chocolates",
      experience: "8 years",
      awards: "Chocolate Artistry Champion 2022",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
      id: 4,
      name: "Chef Aisha Khan",
      speciality: "Mughlai & Hyderabadi Cuisine",
      experience: "14 years",
      awards: "Culinary Excellence Award 2019",
      image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98",
    },
    {
      id: 5,
      name: "Chef Ryan D’Souza",
      speciality: "Continental & Modern Fusion",
      experience: "9 years",
      awards: "Young Chef Innovator 2020",
      image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
    },
    {
      id: 6,
      name: "Chef Priya Verma",
      speciality: "Healthy Salads & Vegan Dishes",
      experience: "7 years",
      awards: "Vegan Food Creator of the Year 2021",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },
    {
      id: 7,
      name: "Chef Marco Rossi",
      speciality: "Authentic Italian Pizza & Pasta",
      experience: "15 years",
      awards: "World Pizza Championship Winner 2020",
      image: "https://images.unsplash.com/photo-1582453472908-09309b3a93a0",
    },
    {
      id: 8,
      name: "Chef Nisha Bhatia",
      speciality: "South Indian Cuisine & Filter Coffee",
      experience: "11 years",
      awards: "Best South Indian Chef 2022",
      image: "https://images.unsplash.com/photo-1529692236671-f1dc28a6f16b",
    },
    {
      id: 9,
      name: "Chef Daniel Brooks",
      speciality: "BBQ & American Grills",
      experience: "13 years",
      awards: "Texas Grill Champion 2019",
      image: "https://images.unsplash.com/photo-1556911073-52527ac437f5",
    },
    {
      id: 10,
      name: "Chef Meera Iyer",
      speciality: "Desserts & Fusion Sweets",
      experience: "9 years",
      awards: "Sweet Artist Award 2023",
      image: "https://images.unsplash.com/photo-1601315489378-1cbeecb4f3e0",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      
      <div className="flex w-full  gap-5 items-center justify-center">
        <HardHat size={30 } className=" animate-bounce mb-5 "/>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 ">
        Meet Our Chef's
      </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56 md:h-64">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[#4f39f6]">{chef.name}</h2>
                <p className="text-gray-700 text-sm md:text-base">
                  <span className="font-semibold">Speciality:</span> {chef.speciality}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  <span className="font-semibold">Experience:</span> {chef.experience}
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
