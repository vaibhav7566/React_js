import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import Chef from "../Components/Chef";
import Add_Recipe from "../Components/Add_Recipe";

const Approuter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/add-recipe" element={<Add_Recipe />} />
      </Routes>
    </div>
  );
};

export default Approuter;
