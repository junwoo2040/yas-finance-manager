import { IAcceptAccountRequestInput } from "@models/user.model";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const acceptAccountRequestById = () => {
  return useMutation<void, Error, IAcceptAccountRequestInput>({
    mutationKey: ["request", "accept"],
    mutationFn: (input) => axiosClient.post("/user/request/accept", input),
  });
};

export default acceptAccountRequestById;
