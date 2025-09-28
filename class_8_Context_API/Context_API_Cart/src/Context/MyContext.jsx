import { createContext, useState } from "react";

export let Mystore = createContext();

export const Mycontextprovider = ({children}) =>{

    const [toggle, setToggle] = useState(false);

    const [cartitems, setCartitems] = useState([]);

    return (
        <Mystore.Provider value={{toggle,setToggle,cartitems,setCartitems}}>
            {children}
        </Mystore.Provider>
    )

}