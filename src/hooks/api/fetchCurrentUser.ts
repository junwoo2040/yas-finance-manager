/* hooks/api/fetchCurrentUser.ts */

/* Imports */
import { useQuery } from "@tanstack/react-query";

import { IUser } from "@models/user.model";
import axiosClient from "@utils/axios";

const fetchCurrentUser = () => {
  return useQuery<IUser, Error>({
    queryKey: ["user", "current"],
    queryFn: () => axiosClient.get("/user/current").then((res) => res.data),
  });
};

export default fetchCurrentUser;
