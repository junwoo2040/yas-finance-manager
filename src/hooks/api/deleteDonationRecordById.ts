/* hooks/api/deleteDonationRecordById.ts */

/* Imports */
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

interface IVariable {
  id: string;
}

const deleteDonationRecordById = () => {
  return useMutation<void, Error, IVariable>({
    mutationKey: ["donation", "delete"],
    mutationFn: (input) =>
      axiosClient.delete("/record/donation/delete", { data: input }),
  });
};

export default deleteDonationRecordById;
