/* components/atoms/PaginationBar.component.tsx */

/* Imports */
import PageButton from "@components/PageButton.component";
import { FC } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface IProps {
  curPage: number;
  numPage: number;
  set: (to: number) => void;
  next: () => void;
  prev: () => void;
}

const PaginationBar: FC<IProps> = ({ curPage, numPage, set, next, prev }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex rounded-lg border-2 border-orange-500 p-1 align-middle">
        <button
          className="group flex h-8 w-8 items-center justify-center"
          onClick={prev}
          disabled={curPage === 1}
        >
          <LuChevronLeft className="h-6 w-6 group-disabled:stroke-gray-400" />
        </button>
        {Array.from(new Array(numPage), (_x, i) => i + 1).map((i) => (
          <PageButton
            key={i}
            page={i}
            isCurrent={i === curPage}
            setPage={() => set(i)}
          />
        ))}
        <button
          className="group flex h-8 w-8 items-center justify-center"
          onClick={next}
          disabled={curPage === numPage}
        >
          <LuChevronRight className="h-6 w-6 group-disabled:stroke-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
