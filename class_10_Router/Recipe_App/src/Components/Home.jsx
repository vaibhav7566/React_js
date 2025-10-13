import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { Mystore } from "../Context/Mycontext";
import { LoaderPinwheel, Martini, Shell } from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {
  let { recipes } = useContext(Mystore);

  let navigate = useNavigate();

  return (
    <div>

      {recipes.length ?  <div className="flex justify-center">
  <button
    className="mt-4 w-3/4 sm:w-1/2 md:w-1/3 lg:w-[30%]  px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    onClick={() => navigate("/add-recipe")}
  >
    Add Recipe
  </button>
</div> : null }
      
      

      <div className="flex flex-wrap justify-center sm:justify-start  p-4 md:p-7 w-full">
      

      {recipes.length ? (
        recipes.map((elem, i) => {
          return <RecipeCard key={i} {...elem} />;
        })
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] p-6 bg-white rounded-lg gap-5">
          <h1 className="text-center text-2xl sm:text-4xl font-bold mt-20 w-full text-gray-700">
            No Recipe Added!
          </h1>
          <Shell size={70} className="animate-spin text-indigo-800 mt-8 mb-4" />
          <button
            className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => navigate("/add-recipe")}
          >
            Add Recipe
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Home;
