import { FC } from "react";

interface IProps {
  label: string;
}

const NavigationDivider: FC<IProps> = ({ label }) => {
  return (
    <li className="mt-2 flex w-full items-center space-x-1 px-2">
      <span className="w-fit flex-shrink text-sm text-gray-500">{label}</span>
      <div className="w-full flex-grow border-t border-gray-500"></div>
    </li>
  );
};

export default NavigationDivider;
