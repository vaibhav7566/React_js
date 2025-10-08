import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { Mystore } from "../Context/Mycontext";

const Home = () => {
  let { recipes } = useContext(Mystore);

  return (
    <div className="flex flex-wrap justify-center sm:justify-start  p-4 md:p-7 w-full">
      {recipes.length ? (
        recipes.map((elem, i) => {
          return <RecipeCard key={i} {...elem} />;
        })
      ) : (
        <h1 className="text-center text-2xl sm:text-4xl font-bold mt-20 w-full">
          No Recipe Added!
        </h1>
      )}
    </div>
  );
};

export default Home;
