import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import Products from "../Components/Products";
import About from "../Components/About";
import Details from "../Components/Details";

const Approuter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path="dets" element={<Details/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Approuter;
