import { FC } from "react";

interface IProps {
  page: number;
  isCurrent: boolean;
  setPage: (to: number) => void;
}

const PageButton: FC<IProps> = ({ page, isCurrent, setPage }) => {
  return (
    <button
      disabled={isCurrent}
      className={`h-8 w-8 rounded-lg p-1 text-center ${
        isCurrent && "bg-orange-500"
      }`}
      onClick={() => setPage(page)}
    >
      {page}
    </button>
  );
};

export default PageButton;
