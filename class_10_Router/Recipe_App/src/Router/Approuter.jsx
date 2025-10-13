import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import Chef from "../Components/Chef";
import Add_Recipe from "../Components/Add_Recipe";
import Recipe_Detail from "../Components/Recipe_Detail";
import  Add_Chef  from "../Components/Add_Chef";


const Approuter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/add-recipe" element={<Add_Recipe />} />
        <Route path="/recipe/detail/:name" element={<Recipe_Detail/>}/>
        <Route path="/Add_Chef" element={<Add_Chef/>}/>
      </Routes>
    </div>
  );
};

export default Approuter;
