/* Router.tsx */

/* Imports */
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "@layouts/Dashboard.layout";

import App from "@pages/App.page";
import Login from "@pages/Login.page";
import Request from "@pages/Request.page";
import NotFound from "@pages/NotFound.page";
import AdminRoute from "@components/molecules/AdminRoute.component";
import RequestList from "@pages/RequestList.page";
import MemberRoute from "@components/molecules/MemberRoute.component";
import Sales from "@layouts/Sales.layout";
import Donation from "@layouts/Donation.layout";

const Router: FC = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="request" element={<Request />} />

      {/* private routes */}
      <Route path="app" element={<MemberRoute />}>
        <Route path="" element={<App />}>
          <Route index element={<Dashboard />} />
          /*
          <Route path="donation" element={<Donation />} />
          <Route path="sales" element={<Sales />} />
          <Route path="" element={<AdminRoute />}>
            <Route path="requests" element={<RequestList />} />
          </Route>
          */
        </Route>
      </Route>

      {/* error routes */}
      <Route path="unauthorized" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
