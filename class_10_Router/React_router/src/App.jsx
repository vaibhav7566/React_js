import React from "react";
import Approuter from "./Router/Approuter";
import Navigation from "./Router/Navigation";

const App = () => {
  return (
    <div>
      <h1>React Routing</h1>

      <Navigation />
      <Approuter />
    </div>
  );
};

export default App;
