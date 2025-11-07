import { useQuery } from "@tanstack/react-query";
import { fetchdata } from "../apis/UsersAPI";

export const getDataFromUsersHook = ( ) => {
    return useQuery({
    queryKey: ["users"],
    queryFn: fetchdata,
  });
}