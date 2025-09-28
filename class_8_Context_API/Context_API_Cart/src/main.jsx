
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Mycontextprovider } from "./Context/MyContext.jsx";


createRoot(document.getElementById("root")).render(
    <Mycontextprovider>
        <App/>
    </Mycontextprovider>
);
