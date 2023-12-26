/* hooks/api/fetchAuth.ts */

/* Imports */
import { IUser } from "@models/user.model";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const fetchMemberAuth = (
  on: {
    onSuccess?: (data: IUser) => void;
    onError?: (error: Error) => void;
  } = { onSuccess: () => {}, onError: () => {} },
) => {
  return useMutation<IUser, Error>({
    mutationKey: ["auth"],
    mutationFn: () => axiosClient.get("/user/current").then((res) => res.data),
    onSuccess: on.onSuccess,
    onError: on.onError,
  });
};

export default fetchMemberAuth;
