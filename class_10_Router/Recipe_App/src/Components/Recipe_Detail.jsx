import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Mystore } from "../Context/Mycontext";

const Recipe_Detail = () => {
  let navigate = useNavigate();
  let { recipes } = useContext(Mystore);
  let { name } = useParams();

  let details = recipes.find((elem) => name === elem.recipeName);

  console.log(details);

  //   const [dummydata, setDummydata] = useState(second)
  return (
   <div className="z-10 mx-auto w-full max-w-7xl mt-10 px-4 sm:px-6 lg:px-8">
  <div className="recipe-card w-full md:w-3/4 h-auto md:h-[70vh] flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden mx-auto transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

    {/* Left: Image Section */}
    <div className="recipe-image-section w-full md:w-1/2 relative min-h-[200px] md:min-h-[70vh]">
      <img
        className="recipe-image object-cover w-full h-full"
        src={details.recipeImage}
        alt={details.recipeName || "Recipe Image"}
      />
      <div className="recipe-time absolute top-3 right-3 bg-[#4f39f6] bg-opacity-80 text-white text-xs sm:text-sm px-3 py-1 rounded shadow-md">
        {details.cookingTime} mins
      </div>
    </div>

    {/* Right: Content Section */}
    <div className="recipe-content w-full md:w-1/2 p-4 sm:p-6 md:p-8 md:pt-3 flex flex-col gap-5 justify-between">

      <div className="recipe-text">
        {/* Back button for desktop (small screen hidden) */}
        <div className="hidden sm:flex justify-end mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-[#4f39f6] text-white rounded-xl px-7 py-2 font-semibold transition-all duration-300 m-2"
          >
            Back
          </button>
        </div>

        <h2 className="recipe-name text-2xl sm:text-3xl font-bold text-gray-800 bg-[#f9fafb] px-2 py-1 mb-2 rounded break-words">
          {details.recipeName || "Delicious Recipe"}
        </h2>

        <span className="ingredients-label block mb-2 font-semibold text-lg sm:text-xl px-2 text-[#4f39f6]">
          Ingredients
        </span>

        <div className="ingredients-container max-h-[25vh] sm:max-h-[30vh] overflow-y-auto border border-gray-300 p-3 rounded bg-gray-50">
          <p className="recipe-ingredients whitespace-pre-line text-gray-700 text-sm sm:text-base leading-relaxed">
            {details.ingredients || "No ingredients provided."}
          </p>
        </div>
      </div>

      <div className="recipe-footer flex flex-wrap items-center gap-2 bg-[#f9fafb] border border-gray-300 py-2 px-3 rounded">
        <span className="font-semibold text-[#4f39f6] text-sm sm:text-base">
          Difficulty :
        </span>
        <span className="recipe-difficulty text-gray-700 text-sm sm:text-base">
          {details.difficulty || "N/A"}
        </span>
      </div>

      {/* Back button for small screen (hidden on sm+) */}
      <div className="block sm:hidden mt-4">
        <button
          onClick={() => navigate("/")}
          className="bg-[#4f39f6] text-white rounded-xl w-full py-3 font-semibold transition-all duration-300"
        >
          Back
        </button>
      </div>

      <div className="flex justify-end">
        <button className="order-btn bg-[#4f39f6] text-white px-5 py-2 rounded-lg font-semibold shadow-md text-sm sm:text-base hover:bg-[#3b2dd3] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          🍽️ Order Now
        </button>
      </div>
    </div>
  </div>
</div>


  );
};

export default Recipe_Detail;
