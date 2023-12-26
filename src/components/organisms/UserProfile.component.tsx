import fetchCurrentUser from "@hooks/api/fetchCurrentUser";
import useLogout from "@hooks/api/useLogout";
import { FC } from "react";
import { LuPower } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const UserProfile: FC = () => {
  const { data, isFetched } = fetchCurrentUser();
  const navigate = useNavigate();
  const { mutate } = useLogout();

  return (
    <div className="flex flex-row items-center border-t border-black p-4">
      <div className="flex w-full flex-col">
        {isFetched && (
          <p className="text-base">
            {data?.firstName} {data?.lastName}
          </p>
        )}
        {isFetched && <p className="text-sm">@{data?.username}</p>}
      </div>
      <button
        onClick={() => {
          mutate();
          navigate("/login");
        }}
        className="h-fit w-fit"
      >
        <LuPower className="h-6 w-6" />
      </button>
    </div>
  );
};

export default UserProfile;
