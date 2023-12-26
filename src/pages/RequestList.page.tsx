import { FC } from "react";

import AllRequestTable from "@components/organisms/AllRequestTable.component";

const RequestList: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Requests</h1>
      <AllRequestTable />
    </>
  );
};

export default RequestList;
