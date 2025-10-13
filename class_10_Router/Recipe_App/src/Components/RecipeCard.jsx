import React from "react";
import { useNavigate } from "react-router";

const RecipeCard = ({recipeName, ingredients, cookingTime, recipeImage}) => {

let navigate = useNavigate();

  return (
    <div className="w-full sm:w-[48%] md:w-[40%] lg:w-[30%] xl:w-[25%] p-3 flex justify-center">
  <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
    {/* Image */}
    <img
      src={recipeImage}
      alt={recipeName}
      className="w-full h-56 sm:h-64 md:h-60 object-cover border-b border-gray-100"
    />

    {/* Content */}
    <div className="p-5 flex flex-col justify-between flex-grow">

      <h2 className="text-2xl font-bold text-gray-800 truncate">{recipeName}</h2>

      <p className="text-gray-600 text-sm    leading-relaxed mt-2 line-clamp-3">
        <span className="font-semibold text-gray-800 max-h-30">Ingredients:</span> {ingredients}
      </p>

      <div className="flex justify-between items-center text-gray-700 text-sm mt-3">
        <p className="font-medium">⏱ {cookingTime} mins</p>
      </div>

      {/* Explore Button */}
      <button
        onClick={() => navigate(`/recipe/detail/${recipeName}`)}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 hover:shadow-md transition-all duration-300"
      >
        🍽️ Explore Now
      </button>
    </div>
  </div>
</div>

  );
};

export default RecipeCard;
