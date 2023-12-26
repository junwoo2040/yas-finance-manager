/* hooks/api/createDonationRecord.ts */

/* Imports */
import { ICreateDonationInput, IDonation } from "@models/donation.model";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const createDonationRecord = () => {
  return useMutation<IDonation, Error, ICreateDonationInput>({
    mutationKey: ["donation", "create"],
    mutationFn: (input) =>
      axiosClient
        .post<IDonation>("/record/donation/create", input)
        .then((res) => res.data),
  });
};

export default createDonationRecord;
