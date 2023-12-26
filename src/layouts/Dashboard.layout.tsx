/* layouts/Dashboard.layout.tsx */

/* Imports */
import { FC } from "react";

import CreateDonationRecordForm from "@components/organisms/CreateDonationRecordForm.component";
import CreateSalesRecordForm from "@components/organisms/CreateSalesRecordForm.component";
import RecentDonationTable from "@components/organisms/RecentDonationTable.component";
import RecentSalesTable from "@components/organisms/RecentSalesTable.component";

const Dashboard: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <CreateDonationRecordForm />
      <CreateSalesRecordForm />
      <div className="flex flex-row space-x-2">
        <div className="flex w-full flex-col">
          <h2 className="text-lg font-semibold">Recent Donations</h2>
          <RecentDonationTable />
        </div>
        <div className="flex w-full flex-col">
          <h2 className="text-lg font-semibold">Recent Sales</h2>
          <RecentSalesTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
