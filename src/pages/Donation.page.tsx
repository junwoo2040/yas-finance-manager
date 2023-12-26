import CreateDonationRecordForm from "@components/organisms/CreateDonationRecordForm.component";
import DonationTable from "@components/organisms/DonationTable.component";
import { FC } from "react";

const Donation: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Donation</h1>
      <CreateDonationRecordForm />
      <DonationTable />
    </>
  );
};

export default Donation;
