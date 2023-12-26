import { FC, HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  label: string;
  type: HTMLInputTypeAttribute;
  error: FieldError | undefined;
  register: () => UseFormRegisterReturn<any>;
}

const InputField: FC<IProps> = ({ label, type, error, register }) => {
  return (
    <div className="w-full flex-grow">
      <label className="-mb-0.5 block text-lg">{label}</label>
      <input
        className="w-full rounded-lg border-2 border-black p-1"
        type={type}
        {...register()}
      />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default InputField;
