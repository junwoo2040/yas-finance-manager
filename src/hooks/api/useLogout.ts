/* hooks/api/useLogout.ts */

/* Imports */
import { useMutation } from "@tanstack/react-query";

import axiosClient from "@utils/axios";

const useLogout = () => {
  return useMutation<void, Error>({
    mutationKey: ["logout"],
    mutationFn: () => axiosClient.post("/auth/logout").then((res) => res.data),
  });
};

export default useLogout;
