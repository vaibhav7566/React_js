// import React, { useState } from "react";

// const Form = ({setUsersdata}) => {

// const [formdata, setFormdata] = useState({
//     name:"",
//     email:"",
//     contact:"",
//     image:"",
// })


// const onchangehandler = (e) => {
//     let {name,value} = e.target;
//     setFormdata({...formdata,[name] : value})
// }
// // console.log(formdata);

// const submithandler = (e) => {
//     e.preventDefault();

//     setUsersdata((prev)=>[...prev,formdata]);

//     setFormdata({
//         name:"",
//         email:"",
//         contact:"",
//         image:"",
//     })
// }

// // console.log(usersdata);
 
//   return (
//     <div className="flex justify-center items-center p-10 bg-gray-100">
//       <form onSubmit={submithandler} className="bg-white shadow-lg rounded-2xl p-6 w-96">
//         {/* Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1">Name</label>
//           <input
//           value={formdata.name}
//           name="name"
//           onChange={onchangehandler}
//             type="text"
//             placeholder="Enter Name"
//             className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1">Email</label>
//           <input
//           value={formdata.email}
//           name="email"
//           onChange={onchangehandler}
//             type="email"
//             placeholder="Example@gmail.com"
//             className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
//           />
//         </div>

//         {/* Contact */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1">Contact</label>
//           <input
//           value={formdata.contact}
//           name="contact"
//           onChange={onchangehandler}
//             type="number"
//             placeholder="Enter Contact Number"
//             className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
//           />
//         </div>

//         {/* Image */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-1">Image</label>
//           <input
//           value={formdata.image}
//           name="image"
//           onChange={onchangehandler}
//             type="url"
//             placeholder="Paste Image URL"
//             className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-amber-600 transition duration-200"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;














// This is Done using react hook form and local storage is also used in this



import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({usersdata,setUsersdata}) => {

// let rfc = useForm(); 
// console.log(rfc); 

let {register,handleSubmit,reset} = useForm();

const formSubmit = (data) => {
  // console.log(data);
  let user = [...usersdata,data];
  setUsersdata(user);
  localStorage.setItem("Usersdata",JSON.stringify(user));
  reset();
}

  return (
    <div className="flex justify-center items-center p-10 bg-gray-100">
      <form onSubmit={handleSubmit(formSubmit)} className="bg-white shadow-lg rounded-2xl p-6 w-96">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
          {...register("name")}
            type="text"
            placeholder="Enter Name"
            className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
         {...register("email")}
            type="text"
            placeholder="Example@gmail.com"
            className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Contact</label>
          <input
          {...register("contact")}
            type="text"
            placeholder="Enter Contact Number"
            className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Image</label>
          <input
        {...register("image")}
            type="text"
            placeholder="Paste Image URL"
            className="w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-amber-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
















