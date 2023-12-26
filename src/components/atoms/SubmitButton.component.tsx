import { FC } from "react";

interface IProps {
  label: string;
  disabled: boolean;
}

const SubmitButton: FC<IProps> = ({ label, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full rounded-lg bg-purple-500 p-1 text-lg"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
