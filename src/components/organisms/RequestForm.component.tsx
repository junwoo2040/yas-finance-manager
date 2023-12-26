/* components/organisms/RequestForm.component.tsx */

/* Imports */
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import createUser from "@hooks/api/createUser";
import useZodForm from "@hooks/useZodForm";

import InputField from "@components/atoms/InputField.component";

import {
  CreateAccountRequestInput,
  ICreateAccountRequestInput,
} from "@models/user.model";
import SubmitButton from "@components/atoms/SubmitButton.component";

const RequestForm: FC = () => {
  const navigate = useNavigate();
  const { isPending, mutateAsync } = createUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm<ICreateAccountRequestInput>(CreateAccountRequestInput);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await mutateAsync(data);
        } catch (e) {
          return;
        }

        navigate("/login");
      })}
      className="m-4 flex w-full flex-col items-center space-y-2"
    >
      <div className="flex w-full space-x-2">
        <InputField
          label="First Name"
          type="text"
          error={errors.firstName}
          register={() => register("firstName")}
        />
        <InputField
          label="Last Name"
          type="text"
          error={errors.lastName}
          register={() => register("lastName")}
        />
      </div>
      <InputField
        label="Username"
        type="text"
        error={errors.username}
        register={() => register("username")}
      />
      <InputField
        label="Email"
        type="email"
        error={errors.email}
        register={() => register("email")}
      />
      <InputField
        label="School"
        type="text"
        error={errors.school}
        register={() => register("school")}
      />
      <InputField
        label="Password"
        type="password"
        error={errors.password}
        register={() => register("password")}
      />
      <InputField
        label="Confirm Password"
        type="password"
        error={errors.confirmPassword}
        register={() => register("confirmPassword")}
      />
      <div></div>
      <SubmitButton label="Request" disabled={isPending} />
    </form>
  );
};

export default RequestForm;
