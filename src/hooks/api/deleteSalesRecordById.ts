/* hooks/api/deleteSalesRecordById.ts */

/* Imports */
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

interface IVariable {
  id: string;
}

const deleteSalesRecordById = () => {
  return useMutation<void, Error, IVariable>({
    mutationKey: ["sales", "delete"],
    mutationFn: (input) =>
      axiosClient.delete("/record/sales/delete", { data: input }),
  });
};

export default deleteSalesRecordById;
