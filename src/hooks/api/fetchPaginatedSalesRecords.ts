/* hooks/api/fetchSalesRecords.ts */

/* Imports */
import { useQuery } from "@tanstack/react-query";

import { IPaginatedSales, PaginatedSales } from "@models/sales.model";
import { IPaginationQuery } from "@models/utils.model";
import axiosClient from "@utils/axios";

const fetchPaginatedSalesRecords = (query: IPaginationQuery) => {
  return useQuery<IPaginatedSales, Error>({
    queryKey: ["sales", "fetch", query.page],
    queryFn: () =>
      axiosClient
        .get(`/record/sales/fetch/page?page=${query.page}&limit=${query.limit}`)
        .then((res) => PaginatedSales.parseAsync(res.data))
        .catch((err) => Promise.reject(err)),
  });
};

export default fetchPaginatedSalesRecords;
