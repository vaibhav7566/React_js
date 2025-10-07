import React from "react";
import Approuter from "./Router/AppRouter";
import Navigation from "./Router/Navigation";
import Card_Details from "./Components/Card_Details";

const App = () => {
  return (
    <div className="font-serif">
      <Navigation />
      <Approuter />

     </div>
  );
};

export default App;
