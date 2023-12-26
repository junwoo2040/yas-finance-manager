/* hooks/api/fetchPaginatedDonationRecords.ts */

/* Imports */
import {
  IPaginatedDonations,
  PaginatedDonations,
} from "@models/donation.model";
import { IPaginationQuery } from "@models/utils.model";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const fetchPaginatedDonationRecords = (query: IPaginationQuery) => {
  return useQuery<IPaginatedDonations, Error>({
    queryKey: ["donation", "fetch", query.page],
    queryFn: () =>
      axiosClient
        .get(
          `/record/donation/fetch/page?page=${query.page}&limit=${query.limit}`,
        )
        .then((res) => PaginatedDonations.parseAsync(res.data))
        .catch((err) => Promise.reject(err)),
  });
};

export default fetchPaginatedDonationRecords;
