/* components/organisms/CreateDonationRecordForm.component.tsx */

/* Imports */
import { FC } from "react";
import { useQueryClient } from "@tanstack/react-query";

import createDonationRecord from "@hooks/api/createDonationRecord";
import useZodForm from "@hooks/useZodForm";

import InputField from "@components/atoms/InputField.component";
import CreateButton from "@components/atoms/CreateButton.component";

import {
  CreateDonationInput,
  ICreateDonationInput,
} from "@models/donation.model";

const CreateDonationRecordForm: FC = () => {
  const { register, handleSubmit, formState } =
    useZodForm<ICreateDonationInput>(CreateDonationInput);
  const { isPending, mutateAsync } = createDonationRecord();
  const queryClient = useQueryClient();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await mutateAsync({ ...data });
        queryClient.invalidateQueries({
          queryKey: ["donation", "fetch"],
        });
      })}
      className="flex h-fit space-x-2"
    >
      <InputField
        label="Donor Name"
        type="text"
        error={formState.errors.donorName}
        register={() => register("donorName")}
      />
      <InputField
        label="Donor Contact"
        type="text"
        error={formState.errors.donorContact}
        register={() => register("donorContact")}
      />
      <InputField
        label="Amount"
        type="number"
        error={formState.errors.amount}
        register={() => register("amount")}
      />
      <div className="flex flex-col">
        <label className="invisible -mb-0.5 block text-lg">a</label>
        <CreateButton label="Create" disabled={isPending} />
      </div>
    </form>
  );
};

export default CreateDonationRecordForm;
