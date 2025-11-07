import React from "react";
import axios from "axios";
import { fetchdata } from "../apis/UsersAPI";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getDataFromUsersHook } from "../hooks/UsersAPIhook";

const Users = () => {
  const { data, isPending, error } = getDataFromUsersHook();

  // console.log(data)
  // console.log( fetchdata());
  return (
    <div>
      <h1>this Users Components</h1>
    </div>
  );
};

export default Users;
