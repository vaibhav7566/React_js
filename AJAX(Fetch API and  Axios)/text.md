---

## 🔹 What is AJAX?

**AJAX = Asynchronous JavaScript And XML**

* Ye ek **technique** hai, alag se koi programming language nahi.
* Iska use **web page ko reload kiye bina server se data lane ya bhejne** ke liye hota hai.
* Matlab tum page refresh kiye bina hi new data laa sakte ho.

---

## 🔹 Daily Life Example

Socho tum Swiggy app open karte ho:

- Tumne ek restaurant open kiya → dishes list aa gayi.
- Tum scroll karke aur dishes dekhte ho → pura app refresh nahi hota, sirf dishes ka part update hota hai.

👉 Yehi **AJAX ka kaam hai** → **partially update karna** bina pura page reload kiye.

---

## 🔹 Why AJAX is used?

1. **No full page reload** → fast experience milta hai.
2. **Better user experience** → Facebook, Twitter me tum scroll karte ho aur new posts aa jaate hain bina refresh ke.
3. **Background data exchange** → data server se background me fetch hota hai, user ko pata bhi nahi chalta.
4. **Interactive apps banane ke liye** → jaise search suggestions (Google search me tum type karte ho aur suggestions aa jaate hain).

---

## 🔹 Technical Example

Suppose tum ek button dabate ho **"Get User Info"**, aur tumhe server se user ka data chahiye, but **refresh nahi karna** chahte.
AJAX request send hogi → server se JSON data milega → tum JS se directly page update kar doge.

---

👉 Short me:
**AJAX ek technique hai jo JavaScript ka use karke server se data fetch/send karti hai bina page reload kiye.**

---

Kya chaho mai tumhe **ek simple AJAX code example** (HTML + JS) bhi dikhau jo server se data fetch karta hai?

## AJAX khud ek technique hai, aur ye internally kuch web technologies ka use karta hai data ko fetch (server se lana) ya send (server me bhejna) ke liye.

# 🔹 Techniques AJAX Uses:

### 1.Fetch API (Modern Way)

### 2.Axios (Popular Library)

# 🔹 What is Fetch API?

Fetch API ek modern JavaScript feature hai jo hume server se data fetch (GET) karne ya bhejne (POST) ka simple tarika deta hai.
Ye Promise-based hai → iska matlab hai asynchronous code likhna easy ho jata hai (no messy callbacks).

## 🔹 Real-Life Example:

Soch le tu Zomato app use kar raha hai.

Jab tu restaurant list dekhna chahta hai, app GET request bhejti hai server ko → server data (restaurants) bhejta hai.

Jab tu order place karta hai, app POST request bhejti hai → server order store kar leta hai.

👉 Ye dono kaam Fetch API easily handle kar leti hai.

## Example
```javascript

fetch('https://fakestoreapi.com/products')
.then(response => response.json()) // Response ko JSON mein convert karte hain
.then(data => {
console.log(data); // Data mil gaya
})
.catch(error => {
console.error('Error:', error); // Error handle karte hain
});
```

# 

# 🔹 What is Axios?

Axios ek popular JavaScript library hai jo server se data fetch (GET) karne aur server par data send (POST/PUT/DELETE) karne ke kaam aati hai.

Ye basically AJAX request karna easy banati hai.

👉 Tu ise Fetch API ka easy version samajh le.

Fetch API me .then(), .catch() aur response.json() likhna padta hai,

Axios me directly clean aur simple code likhne ko milta hai.

## 🔹 Why Axios?

Fetch se zyada easy syntax.

Automatically response ko JSON me convert kar deta hai.

Old browsers me bhi work karta hai.

Request cancel karne ka option deta hai.

Extra features jaise timeout, interceptors bhi deta hai.


import axios from 'axios';

## Example
```javascript
  axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data);  // Data direct milta hai response.data mein
    })
    .catch(error => {
      console.error('Error:', error);
    });
```
#

```javascript
## Key Difference

Feature         |  Fetch API                       |  Axios                    
----------------+----------------------------------+---------------------------
JSON Parsing    |  Manual (response.json())        |  Automatic (response.data)
Error Handling  |  Network errors only by default  |  Automatic for HTTP errors
URL and config  |  Separate fetch options          |  Config object support    
Usage           |  Browser built-in                |  External library needed  
```

## Interview Style Answer (Hinglish)
"Fetch API browser mein default aata hai, jisme manual JSON parse karna padta hai. Axios ek powerful third-party library hai, jo easy syntax aur automatic JSON parsing deti hai. Dono promise-based asynchronous HTTP requests ke liye use hote hain. Axios mein error handling aur request cancel karna easier hota hai. React mein dono use kar sakte hain, lekin Axios zyada popular hai simplicity ki wajah se."