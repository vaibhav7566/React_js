import { createContext, use, useEffect, useState } from "react";

export let Mystore = createContext();


export function Mycontextprovider({ children }) {

const [recipes, setRecipes] = useState([]);

const [chefdata, setChefdata] = useState([]);

console.log(chefdata)

useEffect(() => {
  setRecipes(JSON.parse(localStorage.getItem("recipe")) || []);
  setChefdata(JSON.parse(localStorage.getItem("chefdata")) || []);
  }
, [])

// console.log(recipes)
  return <Mystore.Provider value={{recipes , setRecipes, setChefdata , chefdata}}>
    {children}
    </Mystore.Provider>;
}
