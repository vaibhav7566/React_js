import { useContext, useState } from "react";

let Mystore = useContext();
const [recipes, setRecipes] = useState([]);

function Mycontext({children}){


return <Mycontext.Provider setRecipes={setRecipes}>
    {children}
</Mycontext.Provider> 
}