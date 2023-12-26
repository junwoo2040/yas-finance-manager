/* components/organisms/AllDonationTable.component.tsx */

/* Imports */
import { FC, ReactElement } from "react";

import usePagination from "@hooks/usePagination";
import fetchCurrentUser from "@hooks/api/fetchCurrentUser";
import fetchPaginatedDonationRecords from "@hooks/api/fetchPaginatedDonationRecords";
import deleteDonationRecordById from "@hooks/api/deleteDonationRecordById";

import { LuTrash2 } from "react-icons/lu";
import PaginationBar from "@components/atoms/PaginationBar.component";
import Table from "@components/molecules/Table.component";
import ApiButton from "@components/atoms/ApiButton.component";

interface ITableCol {
  index: number;
  donorName: string;
  donorContact: string;
  amount: number;
  author: string;
  createdAt: string;
  control: ReactElement;
}

const columns: { label: string; property: keyof ITableCol }[] = [
  { label: "#", property: "index" },
  { label: "Donor Name", property: "donorName" },
  { label: "Donor Contact", property: "donorContact" },
  { label: "Amount", property: "amount" },
  { label: "Author", property: "author" },
  { label: "Created At", property: "createdAt" },
  { label: "", property: "control" },
];

const AllDonationTable: FC = () => {
  const limit = 15;
  const pagination = usePagination();
  const { curPage } = pagination;

  const {
    data: rawDonationData,
    error,
    isLoading,
    isError,
  } = fetchPaginatedDonationRecords({
    page: curPage,
    limit,
  });
  const { data: rawUserData } = fetchCurrentUser();
  const { mutateAsync, isPending } = deleteDonationRecordById();

  if (isLoading) return <p>Loading</p>;

  if (!rawDonationData || isError) return <p>{error?.message}</p>;

  const { data, pagination: pgn } = rawDonationData;

  return (
    <>
      <Table<ITableCol>
        headers={columns}
        data={data.map((d, i) => {
          const { id, createdAt, author, ...newData } = d;
          return {
            ...newData,
            index: i + (curPage - 1) * limit + 1,
            author: d.author?.username,
            createdAt: d.createdAt.toDateString(),
            control: rawUserData?.isAdmin && (
              <ApiButton
                mutateAsync={async () => await mutateAsync({ id: d.id })}
                invalidQueryKey={["donation", "fetch"]}
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

export default AllDonationTable;
