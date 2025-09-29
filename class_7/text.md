# What is React Hook Form ? Why we use it .
React Hook Form ek powerful library hai jo React mein form banane aur handle karne ko bahut aasan aur efficient bana deti hai. Ye manual state handling aur validation ke tedious process ko simplify kar deti hai.

***

## React Hook Form Kya Hai?

React Hook Form ek lightweight library hai jo React ke functional components mein forms ko efficiently manage karti hai. Isme:

- Har input ke liye alag-alag `useState` aur `onChange` likhne ki zarurat nahi padti.
- Form handling aur validation concise aur fast hota hai.
- Inputs ko `register` karte hain, aur library automatically form data aur errors ko manage karti hai.

***

## Kyun Use Karen React Hook Form?

- **Less Code:** Har input ke liye useState aur event handling nahi likhna padta.
- **Performance:** Unnecessary re-renders avoid hoti hain, speed better hoti hai.
- **Easy Validation:** `required`, `minLength`, `pattern` jaise built-in validations easily lag sakte hain.
- **Error Handling:** Automatic error messages input ke saath dikh sakte hain.
- **Third-party Integration:** Yup, Zod jaise validation libraries ke saath asaani se integrate hota hai.

***

## Basic Example & Explanation

```jsx
import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text" 
        placeholder="Enter Name" 
        {...register("name", { required: true })}
      />
      {errors.name && <p>Name is required</p>}

      <input 
        type="email" 
        placeholder="Enter Email" 
        {...register("email", { required: true })}
      />
      {errors.email && <p>Email is required</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

- `register("name", { required: true })` → input ko form ke under register karta hai aur validation lagata hai.
- `handleSubmit(onSubmit)` → form submit hone pe `onSubmit` function call hota hai, jisme saara data hota hai.
- `errors` → validation errors ko track karta hai, agar koi validation fail hota hai to wo yahan milta hai.

***

## Kaise Kaam Karta Hai?

1. Saare inputs ko `register()` call ke saath form ke saath attach kiya jaata hai.
2. Form submit hone par `handleSubmit` function call hota hai, jo data validate karta hai.
3. Agar validation sahi ho, toh submit handler execute hota hai.
4. Agar error ho, wo `errors` object mein store hota hai, jise directly UI mein dikhaya ja sakta hai.

***


React Hook Form ek simple aur efficient library hai jo form banane, input handle karne, validation lagane aur errors manage karne ko React mein bahut aasan bana deti hai — kam code, better performance ke saath.

## Interview Style
React Hook Form is a lightweight library for managing forms in React.
It avoids unnecessary re-renders, reduces code complexity, and provides built-in validation.
We use it because it makes forms faster, cleaner, and easier to manage compared to handling state manually.

👉 In short: It’s used to handle forms efficiently with less code and better performance.
