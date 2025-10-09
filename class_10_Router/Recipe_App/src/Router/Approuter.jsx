import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import Chef from "../Components/Chef";
import Add_Recipe from "../Components/Add_Recipe";
import Recipe_Detail from "../Components/Recipe_Detail";

const Approuter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/add-recipe" element={<Add_Recipe />} />
        <Route path="/recipe/detail/:name" element={<Recipe_Detail/>}/>
      </Routes>
    </div>
  );
};

export default Approuter;
