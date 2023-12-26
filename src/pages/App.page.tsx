/* pages/App.page.tsx */

/* Imports */
import { FC } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@components/organisms/Navbar.component";

const App: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <Navbar />
      <main className="h-full w-full space-y-2 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
