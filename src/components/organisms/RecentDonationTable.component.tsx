/* components/organisms/RecentDonationTable.component.tsx */

/* Imports */
import { FC } from "react";

import fetchCurrentUser from "@hooks/api/fetchCurrentUser";
import fetchPaginatedDonationRecords from "@hooks/api/fetchPaginatedDonationRecords";
import deleteDonationRecordById from "@hooks/api/deleteDonationRecordById";

import { LuTrash2 } from "react-icons/lu";
import Table from "@components/molecules/Table.component";
import ApiButton from "@components/atoms/ApiButton.component";

interface ITableCol {
  index: number;
  donorName: string;
  amount: number;
  author: string;
}

const columns: { label: string; property: keyof ITableCol }[] = [
  { label: "#", property: "index" },
  { label: "Donor Name", property: "donorName" },
  { label: "Amount", property: "amount" },
  { label: "Author", property: "author" },
];

const RecentDonationTable: FC = () => {
  const limit = 15;

  const {
    data: rawDonationData,
    error,
    isLoading,
    isError,
  } = fetchPaginatedDonationRecords({
    page: 1,
    limit,
  });
  const { data: rawUserData } = fetchCurrentUser();
  const { mutateAsync, isPending } = deleteDonationRecordById();

  if (isLoading) return <p>Loading</p>;

  if (!rawDonationData || isError) return <p>{error?.message}</p>;

  const { data } = rawDonationData;

  return (
    <Table<ITableCol>
      headers={columns}
      data={data.map((d, i) => {
        const { id, createdAt, author, ...newData } = d;
        return {
          ...newData,
          index: i + 1,
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
  );
};

export default RecentDonationTable;
