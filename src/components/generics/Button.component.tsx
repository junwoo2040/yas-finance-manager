import { FC, MouseEventHandler } from "react";

interface IProps {
  label: string;
  cta?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  flex?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const GenericButton: FC<IProps> = ({
  cta = "primary",
  label,
  size,
  type = undefined,
  disabled = true,
  onClick,
}) => {
  return (
    <button
      className={`${(() => {
        switch (cta) {
          case "primary":
            return "bg-purple-500";
          case "secondary":
            return "border-2 border-purple-500";
          case "tertiary":
            return "bg-purple-200";
          default:
            return "bg-purple-500";
        }
      })()}
      ${(() => {
        switch (size) {
          case "sm":
            return "text-sm";
          case "md":
            return "text-base";
          case "lg":
            return "text-lg";
          default:
            return "text-base";
        }
      })()}
      ${" "}
      flex-grow rounded-lg px-4 py-2`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default GenericButton;
