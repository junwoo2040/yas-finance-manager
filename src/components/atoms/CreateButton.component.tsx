import { FC } from "react";

interface IProps {
  label: string;
  disabled?: boolean;
}

const CreateButton: FC<IProps> = ({ label, disabled }) => {
  return (
    <button
      className="w-24 flex-grow rounded-lg bg-purple-500 p-1"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CreateButton;
