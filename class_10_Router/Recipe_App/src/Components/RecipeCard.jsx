import React from "react";

const RecipeCard = ({recipeName, ingredients, cookingTime, recipeImage}) => {
  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] p-2 flex justify-center">
      <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        {/* Image */}
        <img
          src={recipeImage}
          alt={recipeName}
          className="w-full h-52 sm:h-56 md:h-60 lg:h-52 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {recipeName}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            <span className="font-medium text-gray-800">Ingredients:</span> {ingredients}
          </p>

          <div className="flex justify-between text-gray-700 text-sm sm:text-base">
            <p>
              <span className="font-medium">⏱ Time:</span> {cookingTime} mins
            </p>
          </div>

          {/* Order Now Button */}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold mt-3 hover:bg-indigo-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            🍽️ Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
