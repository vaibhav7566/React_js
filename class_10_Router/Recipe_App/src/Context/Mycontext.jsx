import { createContext, useEffect, useState } from "react";

export let Mystore = createContext();


export function Mycontextprovider({ children }) {

const [recipes, setRecipes] = useState([]);

useEffect(() => {
  setRecipes(JSON.parse(localStorage.getItem("recipe")) || []);
  }
, [])

// console.log(recipes)
  return <Mystore.Provider value={{recipes , setRecipes}}>
    {children}
    </Mystore.Provider>;
}
