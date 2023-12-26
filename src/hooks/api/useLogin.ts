/* hooks/api/useLogin.ts */

/* Imports */
import { ICreateUserInput } from "@models/user.model";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const useLogin = () => {
  return useMutation<void, Error, ICreateUserInput>({
    mutationKey: ["login"],
    mutationFn: (input) =>
      axiosClient.post("/auth/login", input).then((res) => res.data),
  });
};

export default useLogin;
