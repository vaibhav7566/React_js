# What is React js ?
* React is JS Library
* React use to make front-end application 
* With React we make SPA (Single Page Application)

- Backend - Jaha par hum api banate hai or database ko project ko connect karte hai 
- Frontend - Jaha par hum data ko display karwate hai or api ko integrat karte hai 

# Why React js ?
- Fast because of virtual DOM
- Easy to learn 
- Learning curve is also less compare other UI Technology.
- High demand and a lots of job in market.
- Large community

# Why Vite for react setup ?
- Vite is a fast development server and build tool.
- Efficient Production Build 
- Simple configuration.
- TypeScript Support.
- Vite supports features like CSS pre-processors , CSS modules.

# Difference between Library and Framework
- Library - The flow of library is controlled by ourself.
  Example- React 
- Framework - Framework has it own flow and we keep forward according to that flow. 
  Example - Angular

# What is Component
- Everything is component in React when building UI.  
- Component name is always starts with capital letter.
- <Component /> 
## Difference in Component and Function 
- Component name is starts with capital letter. Component has jsx code.
- Function name starts with small letter. Function has js code .

# Importing and Exporting Components
- Why need import and export component
- Make new file for component
- Export component
  1. Default export 
  2. Named export 
  3. Multiple export
- Import component

# What is JSX.
JSX is a syntax extension for JS that lets you write HTML-like markup inside a JS file.

# 📌 Hooks kya hote hain?

React me Hooks special functions hote hain.

Ye functions tumhe React features (jaise state, lifecycle, etc.) ko functional components me use karne dete hain.

Pehle sirf class components me state aur lifecycle hota tha, lekin ab hooks ke wajah se functional components me bhi sab kuch kar sakte ho.

## 📌 useState Hook kya hai?
useState ek hook hai jo state banane aur manage karne ke kaam aata hai.

State = Wo data jo component ke andar change ho sakta hai aur UI ko update karta hai.

- State is a container to store data like variable 
- This is mutable and dynamic
- We have to import it when we want to use it.
- It re-render component automatically so that data csn visible.

## State or variable me difference or Why state required
variable normal value ko hold karke rakhte hai or jab bhi variable ki value change hoti hai toh bo re-render nhi hoti jabki state bhi value ko hold karke rakhta hai but jab bhi state ki value change hoti hai toh bo re rander ho jati hai.


## 📌 Pehle (Hooks se pehle – purana zamana)

### React ke do type ke components hote the:

Class Component → Heavy, thoda bada code likhna padta tha. Sirf yaha par tum state (data jo change hota hai) aur lifecycle methods (jaise componentDidMount, componentDidUpdate, etc.) use kar sakte the.

Functional Component → Ye bas simple UI dikhane ke liye hote the. State ya lifecycle ka option hi nahi tha.

👉 Matlab functional component ek TV screen jaisa tha → bas picture dikhata tha, par remote (state control) nahi tha.

### 📌 Ab (Hooks ke baad – naya zamana)

React ne Hooks diye (2019 ke baad).

Ab tum functional component ke andar hi state aur lifecycle use kar sakte ho.

useState se tum data (state) handle kar sakte ho.

useEffect se lifecycle ka kaam kar sakte ho.

👉 Matlab functional component ke paas ab remote (hooks) aa gaya. Ab sirf picture dikhana nahi, balki control bhi kar sakta hai.

