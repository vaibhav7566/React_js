import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Mystore } from "../Context/Mycontext";
import { useNavigate } from "react-router";

const Add_Recipe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { setRecipes,recipes } = useContext(Mystore);

  const onSubmit = (data) => {
    // console.log(data);
    let updatedArr = [...recipes, data]
    setRecipes(updatedArr);
    localStorage.setItem("recipe",JSON.stringify(updatedArr))
    navigate("/");
    reset();
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4 py-8 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-indigo-600">
          Add New Recipe 🍳
        </h2>

        {/* Recipe Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Name
          </label>
          <input
            type="text"
            {...register("recipeName", { required: "Recipe name is required" })}
            placeholder="Enter recipe name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.recipeName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.recipeName.message}
            </p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients
          </label>
          <textarea
            {...register("ingredients", {
              required: "Ingredients are required",
            })}
            placeholder="List ingredients separated by commas"
            className="w-full px-4 py-2 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ingredients.message}
            </p>
          )}
        </div>

        {/* Cooking Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Cooking Time (in minutes)
          </label>
          <input
            type="number"
            {...register("cookingTime", {
              required: "Cooking time is required",
              min: { value: 1, message: "Must be at least 1 minute" },
            })}
            placeholder="e.g., 30"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.cookingTime && (
            <p className="text-red-500 text-sm mt-1">
              {errors.cookingTime.message}
            </p>
          )}
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Difficulty
          </label>
          <select
            {...register("difficulty", { required: "Please select difficulty" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          {errors.difficulty && (
            <p className="text-red-500 text-sm mt-1">
              {errors.difficulty.message}
            </p>
          )}
        </div>

        {/* Recipe Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Image
          </label>
          <input
            type="url"
            accept="image/*"
            {...register("recipeImage", { required: "Image is required" })}
            placeholder="Image URL"
            className="w-full px-3 py-2 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.recipeImage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.recipeImage.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default Add_Recipe;
