/* components/organisms/RecentSalesTable.component.tsx */

/* Imports */
import { FC } from "react";
import { LuTrash2 } from "react-icons/lu";

import fetchCurrentUser from "@hooks/api/fetchCurrentUser";
import fetchPaginatedSalesRecords from "@hooks/api/fetchPaginatedSalesRecords";
import deleteSalesRecordById from "@hooks/api/deleteSalesRecordById";

import ApiButton from "@components/atoms/ApiButton.component";

import Table from "@components/molecules/Table.component";
import NoData from "@components/atoms/NoData.component";

interface ITableCol {
  index: number;
  clientName: string;
  product: string;
  price: number;
  quantity: number;
  discount: number | undefined;
  author: string;
}

const columns: { label: string; property: keyof ITableCol }[] = [
  { label: "#", property: "index" },
  { label: "Client Name", property: "clientName" },
  { label: "Product", property: "product" },
  { label: "Price", property: "price" },
  { label: "Quantity", property: "quantity" },
  { label: "Discount", property: "discount" },
  { label: "Author", property: "author" },
];

const RecentSalesTable: FC = () => {
  const limit = 15;

  const {
    data: rawDonationData,
    error,
    isLoading,
    isError,
  } = fetchPaginatedSalesRecords({
    page: 1,
    limit,
  });
  const { data: rawUserData } = fetchCurrentUser();
  const { mutateAsync, isPending } = deleteSalesRecordById();

  if (isLoading) return <p>Loading</p>;

  if (!rawDonationData || isError) return <p>{error?.message}</p>;

  const { data } = rawDonationData;

  if (data.length === 0) return <NoData />;

  return (
    <>
      <Table<ITableCol>
        headers={columns}
        data={data.map((d, i) => {
          const { id, createdAt, author, ...newData } = d;

          return {
            ...newData,
            index: i + 1,
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
    </>
  );
};

export default RecentSalesTable;
