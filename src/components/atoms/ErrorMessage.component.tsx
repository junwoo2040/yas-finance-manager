import { FC, PropsWithChildren } from "react";

const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-base italic text-red-500">{children}</p>;
};

export default ErrorMessage;
