import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Mycontextprovider } from "./Context/Mycontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Mycontextprovider>
      <App />
    
    
    </Mycontextprovider>
  </BrowserRouter>
);
