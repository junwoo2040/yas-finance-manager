/* components/molecules/MemberRoute.component.tsx */

/* Imports */
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import fetchMemberAuth from "@hooks/api/fetchMemberAuth";

const MemberRoute: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = fetchMemberAuth({
    onError: () => {
      navigate("/login");
    },
  });

  useEffect(() => mutate(), []);

  return !isPending ? <Outlet /> : <p>Loading</p>;
};

export default MemberRoute;
