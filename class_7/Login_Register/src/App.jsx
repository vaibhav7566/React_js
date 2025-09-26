import React, { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [usersdata, setUsersdata] = useState(
    () => JSON.parse(localStorage.getItem("Usersdata")) || []
  );
  const [existingUsers, setExistingUsers] = useState([]);


  return (
    <div className="w-screen h-screen flex flex-col  justify-center items-center bg-zinc-200">
      {toggle ? (
        <Login
          setToggle={setToggle}
          usersdata={usersdata}
          setExistingUsers={setExistingUsers}
        />
      ) : (
        <Register
          setToggle={setToggle}
          setUsersdata={setUsersdata}
          usersdata={usersdata}
        />
      )}

      <div className="flex w-full p-5 gap-5 justify-center mt-5">
        {existingUsers.length
          ? existingUsers.map((user) => {
              return (
                <div class="w-60 mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200 border-2 border-zinc-400">
                  <h1 class="text-xl font-semibold text-gray-800">
                    Username : {user.username}
                  </h1>
                  <h1 class="text-sm text-gray-600 mt-2">
                    Email : {user.email}
                  </h1>
                </div>
              );
            })
          : <div className="bg-white px-5 py-3 rounded-xl text-2xl font-medium">No User Loggedin!</div>}
      </div>
    </div>
  );
};

export default App;
