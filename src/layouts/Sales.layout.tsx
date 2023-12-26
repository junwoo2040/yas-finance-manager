/* layouts/Sales.layout.tsx */

/* Imports */
import { FC } from "react";

import AllSalesTable from "@components/organisms/AllSalesTable.component";
import CreateSalesRecordForm from "@components/organisms/CreateSalesRecordForm.component";

const Sales: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Sales</h1>
      <CreateSalesRecordForm />
      <AllSalesTable />
    </>
  );
};

export default Sales;
