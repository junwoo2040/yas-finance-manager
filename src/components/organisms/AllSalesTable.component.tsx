/* components/organisms/AllSalesTable.component.tsx */

/* Imports */
import { FC, ReactElement } from "react";
import { LuTrash2 } from "react-icons/lu";

import usePagination from "@hooks/usePagination";
import fetchCurrentUser from "@hooks/api/fetchCurrentUser";
import fetchPaginatedSalesRecords from "@hooks/api/fetchPaginatedSalesRecords";
import deleteSalesRecordById from "@hooks/api/deleteSalesRecordById";

import ApiButton from "@components/atoms/ApiButton.component";

import Table from "@components/molecules/Table.component";
import PaginationBar from "@components/atoms/PaginationBar.component";
import NoData from "@components/atoms/NoData.component";

interface ITableCol {
  index: number;
  clientName: string;
  clientContact: string;
  product: string;
  price: number;
  quantity: number;
  discount: number | undefined;
  author: string;
  createdAt: string;
  control: ReactElement;
}

const columns: { label: string; property: keyof ITableCol }[] = [
  { label: "#", property: "index" },
  { label: "Client Name", property: "clientName" },
  { label: "Client Contact", property: "clientContact" },
  { label: "Product", property: "product" },
  { label: "Price", property: "price" },
  { label: "Quantity", property: "quantity" },
  { label: "Discount", property: "discount" },
  { label: "Author", property: "author" },
  { label: "Created At", property: "createdAt" },
  { label: "", property: "control" },
];

const AllSalesTable: FC = () => {
  const limit = 10;
  const pagination = usePagination();
  const { curPage } = pagination;

  const {
    data: rawDonationData,
    error,
    isLoading,
    isError,
  } = fetchPaginatedSalesRecords({
    page: curPage,
    limit,
  });
  const { data: rawUserData } = fetchCurrentUser();
  const { mutateAsync, isPending } = deleteSalesRecordById();

  if (isLoading) return <p>Loading</p>;

  if (!rawDonationData || isError) return <p>{error?.message}</p>;

  const { data, pagination: pgn } = rawDonationData;

  if (data.length === 0) return <NoData />;

  return (
    <>
      <Table<ITableCol>
        headers={columns}
        data={data.map((d, i) => {
          const { id, createdAt, author, ...newData } = d;

          return {
            ...newData,
            index: i + (curPage - 1) * limit + 1,
            createdAt: createdAt.toDateString(),
            author: author?.username,
            control: rawUserData?.isAdmin && (
              <ApiButton
                mutateAsync={async () => await mutateAsync({ id: d.id })}
                invalidQueryKey={["sales", "fetch"]}
                content={<LuTrash2 />}
                disabled={isPending}
              />
            ),
          };
        })}
      />
      <PaginationBar
        {...pagination}
        next={() => pagination.next(pgn.pageCount)}
        numPage={pgn.pageCount}
      />
    </>
  );
};

export default AllSalesTable;
