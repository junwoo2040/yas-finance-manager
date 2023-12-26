import { useState } from "react";

const usePagination = () => {
  const [curPage, setCurPage] = useState(1);

  const set = (to: number) => {
    setCurPage(to);
  };

  const next = (max: number) => {
    setCurPage(Math.min(curPage + 1, max));
  };

  const prev = () => {
    setCurPage(Math.max(curPage - 1, 1));
  };

  return { curPage, set, next, prev };
};

export default usePagination;
