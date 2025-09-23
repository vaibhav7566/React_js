# 📌 Component Reusability (Short Theory)

## Definition:
React me ek component ek reusable block of code hota hai jo UI ka ek part represent karta hai (like button, card, navbar).

### Purpose:
Ek hi component ko alag-alag data (props) ke sath multiple jagah use kiya jaa sakta hai → isse time bachta hai, code clean rehta hai, aur maintain karna easy hota hai.

### How it works:

Ek component banao (e.g., UserCard).

Data ko props ke through bhejo.

Same component ko different props ke sath use karke different output dikhao.

### Example (conceptual):

Tumhare paas ek Friend component hai.

Usme sirf props.name use hota hai.

Ab tum 10 doston ke naam usi ek component ko pass karke display kar sakte ho.


# 📌 Props Drilling (Easy)

## Matlab: Parent ka data child tak bhejna.

Problem: Agar data direct child ko chahiye, par beech me aur components hain, to unhe bhi wo props dene padte hain.

## Example:

GrandParent → Parent → Child

Data GrandParent se Child ko chahiye, par Parent ko pass karna zaruri hai → ye hai props drilling.

Nuksan: Beech ke components ko data chahiye hi nahi, fir bhi dena padta hai.

Solution: Context API ya Redux use karo.

#### 👉 Ek line me:
Props Drilling = Ek component ka data bahut levels ke beech se pass karke dusre component tak pahunchana.


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

