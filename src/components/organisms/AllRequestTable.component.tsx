import ApiButton from "@components/atoms/ApiButton.component";
import PaginationBar from "@components/atoms/PaginationBar.component";
import Table from "@components/molecules/Table.component";
import acceptAccountRequestById from "@hooks/api/acceptAccountRequestById";
import denyAccountRequestById from "@hooks/api/denyAccountRequestById";
import fetchPaginatedAccountRequests from "@hooks/api/fetchPaginatedAccountRequests";
import usePagination from "@hooks/usePagination";
import { FC, ReactElement } from "react";
import { LuCheck, LuX } from "react-icons/lu";

interface ITableCol {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  school: string;
  createdAt: string;
  control: ReactElement;
}

const columns: { label: string; property: keyof ITableCol }[] = [
  { label: "First Name", property: "firstName" },
  { label: "Last Name", property: "lastName" },
  { label: "Email", property: "email" },
  { label: "Username", property: "username" },
  { label: "School", property: "school" },
  { label: "Created At", property: "createdAt" },
  { label: "", property: "control" },
];

const AllRequestTable: FC = () => {
  const limit = 15;
  const pagination = usePagination();
  const { curPage } = pagination;

  const {
    data: rawDonationData,
    error,
    isLoading,
    isError,
  } = fetchPaginatedAccountRequests({
    page: curPage,
    limit,
  });

  const { mutateAsync: acceptMutateAsync, isPending: isAcceptPending } =
    acceptAccountRequestById();
  const { mutateAsync: denyMutateAsync, isPending: isDenyPending } =
    denyAccountRequestById();

  if (isLoading) return <p>Loading</p>;

  if (!rawDonationData || isError) return <p>{error?.message}</p>;

  const { data, pagination: pgn } = rawDonationData;

  return (
    <>
      <Table<ITableCol>
        headers={columns}
        data={data.map((d) => {
          const { id, createdAt, ...newData } = d;
          return {
            ...newData,
            createdAt: createdAt.toDateString(),
            control: (
              <>
                <ApiButton
                  mutateAsync={async () => await acceptMutateAsync({ id })}
                  invalidQueryKey={["request", "fetch", pgn.currentPage]}
                  content={<LuCheck />}
                  disabled={isAcceptPending}
                />
                <ApiButton
                  mutateAsync={async () => await denyMutateAsync({ id })}
                  invalidQueryKey={["request", "fetch", pgn.currentPage]}
                  content={<LuX />}
                  disabled={isDenyPending}
                />
              </>
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

export default AllRequestTable;
