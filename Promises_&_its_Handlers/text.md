#### Bhai 👌 ab tu ek dam important JavaScript concept pe aaya hai – Promises. React seekhne ke liye bhi ye bahut kaam aata hai (API calls, async kaam handle karne ke liye).
Chalo step by step samjhte hain, simple language + examples ke sath:

# 🔹 Promise kya hota hai?

### 👉 Promise ek object hai jo JavaScript me asynchronous kaam (jo turant complete nahi hota, thoda time leta hai) ko handle karne ke liye use hota hai.

Real life Example:

Soch tu ne Swiggy/Zomato pe food order kiya 🍔.

Ab wo order immediately deliver nahi hota → thoda time lagta hai.

Tu wait karta hai → finally ya to order deliver hoga (success) ya cancel ho jayega (failure).

Yehi kaam JS me Promise karta hai.

## 🔹 Promise ke 3 States hote hain:

### Pending → Kaam chal raha hai (jaise order placed but deliver nahi hua).

### Fulfilled (Resolved) → Kaam success ho gaya (order deliver ho gaya ✅).

### Rejected → Kaam fail ho gaya (order cancel ❌).


Bahut mast sawal pucha bhai 👌 tu chah raha hai **error handling ke difference between ES5 vs ES6** samajhna.
Chalo easy aur detail me explain karta hoon:

---

# ⚡ Error Handling in ES5 vs ES6

---

## 🔹 **ES5 (Old JavaScript way)**

👉 ES5 (2011 ke pehle waale JavaScript) me error handle karne ke liye **try...catch** hi use hota tha.
Promises ya async/await nahi the.

### Example:

```javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("❌ Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.log("Error handled:", error.message);
  }
}

divide(10, 0); // Output -> Error handled: ❌ Cannot divide by zero
```

✅ **Point:**

* Sirf synchronous (turant hone wale code) errors handle kar sakte the.
* Agar koi async error hua (like API call fail), try...catch se pakadna mushkil hota tha.

---

## 🔹 **ES6 (Modern JavaScript way)**

👉 ES6 (2015) ke baad **Promises aur async/await** aaye, jisme **error handlers aur bhi easy** ho gaye.

### 1. **Promise ke saath error handling**

```javascript
let orderFood = new Promise((resolve, reject) => {
  let isRestaurantOpen = false;

  if (isRestaurantOpen) {
    resolve("🍔 Food Delivered!");
  } else {
    reject("❌ Restaurant Closed!");
  }
});

orderFood
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error); // Error handler
  });
```

👉 Agar reject hoga, `.catch()` automatically handle karega.

---

### 2. **Async/Await (introduced ES2017 but works with ES6 Promises)**

Error handling aur bhi clean ho gayi:

```javascript
async function getFood() {
  try {
    let order = await orderFood;
    console.log("Success:", order);
  } catch (error) {
    console.log("Error:", error); // Error handler
  }
}

getFood();
```

👉 Yaha `try...catch` async ke andar bhi kaam karta hai (jo ES5 me possible nahi tha).

---

# ✅ **Summary Table**

| Feature               | ES5                  | ES6+ (Modern JS)                       |
| --------------------- | -------------------- | -------------------------------------- |
| Error handling method | `try...catch` only   | `try...catch`, `.catch()`, async/await |
| Handles sync errors?  | ✅ Yes                | ✅ Yes                                  |
| Handles async errors? | ❌ Difficult          | ✅ Easy (via Promise/async-await)       |
| Example               | Divide by zero error | API call failure, Promise rejection    |

---

👉 Ek line me yaad rakh:

* **ES5** → sirf `try...catch` tha (sync errors ke liye).
* **ES6+** → Promises ke `.catch()` aur `async/await + try...catch` aaye (async errors ke liye).

---

Bhai, kya tu chahata hai main ek **real API call example** bana ke dikhau (ES5 style vs ES6 style error handling) taaki aur clear ho jaye?
