/* components/organisms/CreateSalesRecordForm.component.tsx */

/* Imports */
import { FC } from "react";
import { useQueryClient } from "@tanstack/react-query";

import useZodForm from "@hooks/useZodForm";
import createSalesRecord from "@hooks/api/createSalesRecord";

import { CreateSalesInput, ICreateSalesInput } from "@models/sales.model";
import InputField from "@components/atoms/InputField.component";
import CreateButton from "@components/atoms/CreateButton.component";

const CreateSalesRecordForm: FC = () => {
  const { register, handleSubmit, formState } =
    useZodForm<ICreateSalesInput>(CreateSalesInput);
  const { isPending, mutateAsync } = createSalesRecord();
  const queryClient = useQueryClient();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await mutateAsync({ ...data });
        queryClient.invalidateQueries({
          queryKey: ["sales", "fetch"],
        });
      })}
      className="flex h-fit space-x-2"
    >
      <InputField
        label="Client Name"
        type="text"
        error={formState.errors.clientName}
        register={() => register("clientName")}
      />
      <InputField
        label="Client Contact"
        type="text"
        error={formState.errors.clientContact}
        register={() => register("clientContact")}
      />
      <InputField
        label="Product"
        type="text"
        error={formState.errors.product}
        register={() => register("product")}
      />
      <InputField
        label="Price"
        type="number"
        error={formState.errors.price}
        register={() => register("price")}
      />
      <InputField
        label="Quantity"
        type="number"
        error={formState.errors.quantity}
        register={() => register("quantity")}
      />
      <InputField
        label="Discount"
        type="number"
        error={formState.errors.discount}
        register={() => register("discount")}
      />
      <div className="flex flex-col">
        <label className="invisible -mb-0.5 block text-lg">a</label>
        <CreateButton label="Create" disabled={isPending} />
      </div>
    </form>
  );
};

export default CreateSalesRecordForm;
