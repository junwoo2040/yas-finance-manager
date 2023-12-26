/* pages/Request.page.tsx */

/* Imports */
import { FC } from "react";
import { Link } from "react-router-dom";

import RequestForm from "@components/organisms/RequestForm.component";
import Auth from "@layouts/Auth.layout";

const Request: FC = () => {
  return (
    <Auth>
      <h1 className="m-2 text-2xl font-bold">Request</h1>
      <RequestForm />
      <p>
        Already a member?{" "}
        <Link to={"/login"} className="text-pink-400">
          Login
        </Link>
      </p>
    </Auth>
  );
};

export default Request;
