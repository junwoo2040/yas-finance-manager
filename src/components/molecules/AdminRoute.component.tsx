/* components/molecules/AdminRoute.component.tsx */

/* Imports */
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import fetchMemberAuth from "@hooks/api/fetchMemberAuth";

const AdminRoute: FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = fetchMemberAuth({
    onSuccess: (d) => {
      if (!d.isAdmin) navigate("/app");
    },
    onError: () => {
      navigate("/login");
    },
  });

  useEffect(() => mutate(), []);

  return !isPending ? <Outlet /> : <p>Loading</p>;
};

export default AdminRoute;
