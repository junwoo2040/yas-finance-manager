/* components/organisms/Navbar.component.tsx */

/* Imports */
import { FC } from "react";

import fetchCurrentUser from "@hooks/api/fetchCurrentUser";
import Navigation from "@components/atoms/Navigation.component";
import { LuGaugeCircle, LuHelpingHand, LuStore, LuUsers } from "react-icons/lu";
import NavigationDivider from "@components/atoms/NavigationDivider.component";
import UserProfile from "./UserProfile.component";
import { useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const { data: userData } = fetchCurrentUser();
  const { pathname } = useLocation();

  return (
    <nav className="flex h-full w-72 flex-col border-r-2 border-purple-500 bg-gray-100">
      <div className="w-full p-6">
        <h1 className="w-24 flex-wrap text-xl font-extrabold leading-5">
          Yangon Animal Shelter
        </h1>
        <h2>Finance Manager</h2>
      </div>

      <ul>
        <Navigation
          Icon={LuGaugeCircle}
          label="Dashboard"
          path="/app"
          selected={pathname === "/app"}
        />
        <NavigationDivider label="Records" />
        <Navigation
          Icon={LuHelpingHand}
          label="Donation"
          path="/app/donation"
          selected={pathname === "/app/donation"}
        />
        <Navigation
          Icon={LuStore}
          label="Sales"
          path="/app/sales"
          selected={pathname === "/app/sales"}
        />
        {userData && userData.isAdmin && (
          <>
            <NavigationDivider label="Admin" />
            <Navigation
              Icon={LuUsers}
              label="Requests"
              path="/app/requests"
              selected={pathname === "/app/requests"}
            />
          </>
        )}
      </ul>
      <div className="h-full"></div>
      <UserProfile />
    </nav>
  );
};

export default Navbar;
