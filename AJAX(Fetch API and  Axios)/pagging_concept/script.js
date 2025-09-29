const url = "https://jsonplaceholder.typicode.com/posts";
let users = [];

let next = document.querySelector("#next-btn");
let previous = document.querySelector("#prev-btn");

fetch(url)
  .then(response => response.json())   // Response ko JSON me convert karo
  .then(data => {
    console.log("Fetched Posts:", data);  // Data aa gaya
    users = data;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  function show_users_info(obj){
    // Parent card div
const card = document.createElement("div");
card.className = "card max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200";

// Inner p-6 div
const innerDiv = document.createElement("div");
innerDiv.className = "p-6";

// h2 (ID)
const h2 = document.createElement("h2");
h2.id = "card-id";
h2.className = "text-lg font-semibold text-gray-700 mb-2";
h2.textContent = obj.id;

// h3 (Title)
const h3 = document.createElement("h3");
h3.id = "card-title";
h3.className = "text-xl font-bold text-blue-600 mb-2";
h3.textContent = obj.title;

// p (Body)
const p = document.createElement("p");
p.id = "card-body";
p.className = "text-gray-600";
p.textContent = obj.body;

// Sabko append karna
innerDiv.appendChild(h2);
innerDiv.appendChild(h3);
innerDiv.appendChild(p);

card.appendChild(innerDiv);

// Final card ko body me add karna
document.body.appendChild(card);

  }
// let counter = 0;
//   function rander(users){
// for(let last =counter+10;counter<=last;counter++){
//     show_users_info(users[counter]);
// }
//   }

//   next.addEventListener("click",function(){
// users.forEach(function(obj){
// rander(users)
// })
//   })


