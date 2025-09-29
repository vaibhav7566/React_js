# What are sideEffects in react ?

React ke function components ka main kaam hota hai UI render karna. Lekin kai baar aise tasks karne padte hain jo UI se directly related nahi hote, jaise:

* Server se data lana (HTTP request)

* Local storage mein kuch save karna

* Timer set karna

* Event listeners lagana ya hataana

Ye sab "side effects" hain, kyunki ye React ke kaam ke bahar kuch alag actions perform karte hain. React mein side effects ko handle karne ke liye useEffect hook use karte hain. Iska syntax hai:


## Interview Style Answer (Hinglish)
Agar interview mein koi puchhe "React mein side effect kya hai?", toh aise jawab de sakte ho:

"Sir/Mam, React mein side effect woh hota hai jo component ki rendering ke bahar hota hai, jaise data fetch karna, ya browser storage mein value set karna. Inko hum direct UI render logic mein nahi likhte, kyunki ye render hone ke baad perform hote hain. Isliye React mein side effect handle karne ke liye useEffect hook ka istemaal karte hain. Isse hum apni side-effect wali logic ko alag rakh sakte hain aur React ko bol sakte hain ki render hone ke baad ye kaam karo. Ye ek important concept hai, kyunki bina proper handling ke unnecessary renders bhi ho sakte hain ya bugs aa sakte hain."



# What is useEffect why we use useEffect explain it with syntax and simple example

React mein useEffect ek special hook hai jo functional components ke andar side effects handle karne ke liye use hota hai, jaise data fetch karna, timer set karna, ya browser title change karna.

Hinglish Explanation
Jab bhi humara component render hota hai, aur hume us render ke baad kuch extra kaam karna ho (jaise data fetch karna ya DOM ko update karna), toh hum useEffect ka use karte hain. Ye samajhne ke liye simple example lete hain:

```javascript
Syntax
js

useEffect(() => {
  // Yahan side-effect likho, jaise data fetch ya timer set karna
  return () => {
    // (Optional) Cleanup code yahan aata hai, jaise event listener hataana
  };
}, [dependencyArray]);

``` 
-> Pehla argument ek function hai jisme main logic hota hai

-> Dusra argument ek array hai (dependency array) jo bataata hai ki kab effect dubara run ho.

- Agar dependency array ([]) khali hai, effect sirf pehli render pe chalega.

- Agar array mein kuch value di hai, effect ek bar pehli render pe chalega then tab hi chalega jab wo value change ho.


# Component LifeCycle (Mounting,Updating ,Unmounding)

##  Definition
React component lifecycle ka matlab hai ek component ke jeevan ke mukhya charan jinmein wo create hota hai, update hota hai, aur hataaya jaata hai. Ye lifecycle teen main phases mein divided hai: Mounting, Updating, aur Unmounting.

### Mounting (Component Create Hona)
- Jab component pehli baar DOM mein add hota hai.

- Important lifecycle methods:

constructor() — state set karne aur methods bind karne ke liye.

render() — UI ko return karta hai.

componentDidMount() — rendering ke baad side effects jaise data fetch karne ke liye chalaya jata hai.

### Updating (Component Update Hona)
- Jab component ka state ya props change hota hai.

- Important lifecycle methods:

shouldComponentUpdate() — decide karta hai ki component re-render hoga ya nahi.

render() — naya UI update karta hai.

componentDidUpdate() — update ke baad side effects ke liye use hota hai.

### Unmounting (Component Remove Hona)
- Jab component DOM se hataaya jaata hai.

- Important lifecycle method:

componentWillUnmount() — cleanup karne ke liye, jaise event listeners hataana ya timers clear karna.

### -- Simple Summary (Hinglish)
React component ka lifespan teen main steps mein hota hai:

Mounting: Component ban kar webpage mein dikhai deta hai.

Updating: Component ka data change hoke UI update hota hai.

Unmounting: Component remove ho jaata hai page se, aur saare unnecessary resources clean kar diye jaate hain.

Ye lifecycle methods agar sahi tarah use karein, to efficient code bana ke app smooth chal sakta hai.