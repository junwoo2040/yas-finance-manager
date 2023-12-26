import { FC } from "react";
import { LuLeaf } from "react-icons/lu";

const NoData: FC = () => {
  return (
    <div className="flex h-72 w-full flex-grow flex-col items-center justify-center space-y-2 rounded-lg border-2 border-orange-500">
      <LuLeaf className="h-16 w-16" />
      <p className="text-lg">No entries found</p>
    </div>
  );
};

export default NoData;
