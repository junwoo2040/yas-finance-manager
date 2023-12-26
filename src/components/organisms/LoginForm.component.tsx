/* components/organisms/LoginForm.component.tsx */

/* Imports */
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import useLogin from "@hooks/api/useLogin";
import useZodForm from "@hooks/useZodForm";

import InputField from "@components/atoms/InputField.component";

import { ILogin, Login } from "@models/user.model";
import SubmitButton from "@components/atoms/SubmitButton.component";
import ErrorMessage from "@components/atoms/ErrorMessage.component";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const { error, isError, isPending, mutateAsync } = useLogin();
  const { register, handleSubmit, formState } = useZodForm<ILogin>(Login);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await mutateAsync(data);
        } catch (e) {
          return;
        }

        navigate("/app");
      })}
      className="m-4 flex w-full flex-col items-center space-y-2"
    >
      <InputField
        label="Username"
        type="text"
        error={formState.errors.username}
        register={() => register("username")}
      />
      <InputField
        label="Password"
        type="password"
        error={formState.errors.password}
        register={() => register("password")}
      />
      <div></div>
      <SubmitButton label="Login" disabled={isPending} />
      {isError && <ErrorMessage>{error?.message}</ErrorMessage>}
    </form>
  );
};

export default LoginForm;
