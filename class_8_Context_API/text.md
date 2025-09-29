# What is context API . Why we use Context API Explain with example with proper understanding 

### ⚡ Problem: "Prop Drilling"

* Kabhi tumhare paas ek parent component hota hai jo data child tak bhejna chahta hai.

* Agar child direct parent ka nahi hai (deep nested hai), to tumhe har ek level par props pass karna padta hai, even un components ko jinko wo data kaam bhi nahi aata.

👉 Isko hi kehte hain prop drilling.


```javascript
const App = () => {
  const user = { name: "Vaibhav", email: "vaibhav@gmail.com" };
  return <Parent user={user} />;
};

const Parent = ({ user }) => {
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return <GrandChild user={user} />;
};

const GrandChild = ({ user }) => {
  return <h2>Hello {user.name}</h2>;
};

```

Yaha sirf GrandChild ko user chahiye tha, par mujhe Parent aur Child me bhi forcefully pass karna pada → prop drilling issue.

### ⚡ Solution: Context API

Context API ek global store jaisa kaam karta hai. Tum data ko ek jagah rakh do (Context Provider me), aur jahan chahiye waha directly use kar lo, bina beech me props pass kiye.


### ⚡ Benefits of Context API

1. Prop drilling khatam ho jaata hai.

2. Ek jagah data rakho → kahin bhi access karo.

3. State ko global bana deta hai (mini Redux jaisa).

4. Clean aur maintainable code milta hai.

### Example of Context API
```javascript

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
```