import { ComponentType, FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  Icon: ComponentType<{ className?: string }>;
  label: string;
  path: string;
  selected?: boolean;
}

const Navigation: FC<IProps> = ({ Icon, label, path, selected }) => {
  return (
    <li className="flex flex-row items-center space-x-2">
      {selected ? (
        <div className="h-6 w-2 rounded-r-md bg-orange-500"></div>
      ) : (
        <div className="w-2"></div>
      )}
      <Icon className="h-6 w-6" />
      <Link to={path} className="m-1 text-lg">
        {label}
      </Link>
    </li>
  );
};

export default Navigation;
