import { QueryKey, useQueryClient } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface IProps {
  mutateAsync: () => Promise<void>;
  invalidQueryKey: QueryKey;
  disabled?: boolean;
  content?: ReactNode;
}

const ApiButton: FC<IProps> = ({
  content,
  invalidQueryKey,
  disabled,
  mutateAsync,
}) => {
  const queryClient = useQueryClient();

  return (
    <button
      onClick={async () => {
        await mutateAsync();
        queryClient.invalidateQueries({ queryKey: invalidQueryKey });
      }}
      disabled={disabled || false}
      className="p-1"
    >
      {content || "Button"}
    </button>
  );
};

export default ApiButton;
