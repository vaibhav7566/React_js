// URL from SoundCloud
// const url = 'https://randomuser.me//api?gender=female';
// // Fetch request
// fetch(url)
//   .then(response => {
//     // response(readablestream (binary format)) ko JSON format me convert karna
//     return response.json();
//   })
//   .then(data => {
//     // yaha pe actual data milega
//     console.log("Fetched Data:", data);

//     // Example: first track ka title print karna
//     if (data.collection && data.collection.length > 0) {
//       console.log("First Track Title:", data.collection[0].title);
//     }
//   })
//   .catch(error => {
//     // agar koi error aayi to handle karna
//     console.error("Error fetching data:", error);
//   });



// Correct URL (users ka data lene ke liye)
const url = "https://jsonplaceholder.typicode.com/users";
let btn = document.querySelector("button");
let users = [];

// Parent div
const card = document.createElement("div");
card.className = "bg-white rounded-xl shadow-lg p-8 w-64 text-center";

// h2 element
const naam = document.createElement("h2");
naam.className = "mb-2 text-gray-800 text-xl font-semibold";
naam.textContent = "Name";

// Username paragraph
const usernameP = document.createElement("p");
usernameP.className = "text-gray-500 mb-1";

const usernameSpan = document.createElement("span");
usernameSpan.className = "font-medium text-gray-700";
usernameSpan.textContent = "Username:";

usernameP.appendChild(usernameSpan);

// Email paragraph
const emailP = document.createElement("p");
emailP.className = "text-gray-500";

const emailSpan = document.createElement("span");
emailSpan.className = "font-medium text-gray-700";
emailSpan.textContent = "Email:";

emailP.appendChild(emailSpan);

// sab elements ko card me add karna
card.appendChild(naam);
card.appendChild(usernameP);
card.appendChild(emailP);

// finally card ko body me add karna
const container = document.createElement("div");
document.body.appendChild(container);
container.appendChild(card);

// Fetch API
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Fetched User Data:", data);
    users = data;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

let currentIndex = 0;
btn.addEventListener("click", function () {
  if (users.length > 0) {
    naam.textContent = users[currentIndex].name;
    usernameSpan.textContent = "Username: " + users[currentIndex].username;
    emailSpan.textContent = "Email: " + users[currentIndex].email;

    currentIndex = (currentIndex + 1) % users.length; // loop karna
  }
});

