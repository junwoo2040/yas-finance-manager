/* layouts/Donation.layout.tsx */

/* Imports */
import { FC } from "react";

import AllDonationTable from "@components/organisms/AllDonationTable.component";
import CreateDonationRecordForm from "@components/organisms/CreateDonationRecordForm.component";

const Donation: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Donation</h1>
      <CreateDonationRecordForm />
      <AllDonationTable />
    </>
  );
};

export default Donation;
