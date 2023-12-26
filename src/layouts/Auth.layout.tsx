import { FC, PropsWithChildren } from "react";

const Auth: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center rounded-lg border-2 border-purple-500 px-8 py-16">
        {children}
      </div>
    </div>
  );
};

export default Auth;
