/* hooks/api/createSalesRecord.ts */

/* Imports */
import { ICreateSalesInput, ISales } from "@models/sales.model";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const createSalesRecord = () => {
  return useMutation<ISales, Error, ICreateSalesInput>({
    mutationKey: ["sales", "create"],
    mutationFn: (input) =>
      axiosClient
        .post<ISales>("/record/sales/create", input)
        .then((res) => res.data),
  });
};

export default createSalesRecord;
