/* pages/Login.page.tsx */

/* Imports */
import { FC } from "react";
import { Link } from "react-router-dom";

import LoginForm from "@components/organisms/LoginForm.component";
import Auth from "@layouts/Auth.layout";

const Login: FC = () => {
  return (
    <Auth>
      <h1 className="m-2 text-2xl font-bold">Login</h1>
      <LoginForm />
      <p className="text-base">
        Not a member yet?{" "}
        <Link to={"/request"} className="text-pink-400">
          Request to be a member
        </Link>
      </p>
    </Auth>
  );
};

export default Login;
