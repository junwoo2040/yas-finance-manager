import {
  IPaginatedAccountRequests,
  PaginatedAccountRequests,
} from "@models/user.model";
import { IPaginationQuery } from "@models/utils.model";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "@utils/axios";

const fetchPaginatedAccountRequests = (query: IPaginationQuery) => {
  return useQuery<IPaginatedAccountRequests, Error>({
    queryKey: ["request", "fetch", query.page],
    queryFn: () =>
      axiosClient
        .get(`/user/request/fetch/page?page=${query.page}&limit=${query.limit}`)
        .then((res) => PaginatedAccountRequests.parseAsync(res.data))
        .catch((err) => Promise.reject(err)),
  });
};

export default fetchPaginatedAccountRequests;
