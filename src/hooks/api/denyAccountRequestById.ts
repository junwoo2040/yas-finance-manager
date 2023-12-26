import { IDenyAccountRequestInput } from "@models/user.model";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const denyAccountRequestById = () => {
  return useMutation<void, Error, IDenyAccountRequestInput>({
    mutationKey: ["request", "deny"],
    mutationFn: (input) => axiosClient.post("/user/request/deny", input),
  });
};

export default denyAccountRequestById;
