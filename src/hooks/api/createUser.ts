/* hooks/api/createUser.ts */

/* Imports */
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";
import { ICreateUserInput } from "@models/user.model";

const createUser = () => {
  return useMutation<void, Error, ICreateUserInput>({
    mutationFn: (input) =>
      axiosClient.post("/auth/request", input).then((res) => res.data),
  });
};

export default createUser;
