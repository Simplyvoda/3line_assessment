import PageHeader from "@/components/shared/PageHeader";
import { SETTINGS_TABS } from "@/constants/settings_tab";
import { staticData } from "@/constants/user_roles";
import { useEffect } from "react";
import { NavLink, Outlet as SettingsOutlet } from "react-router-dom";

const SettingsPage = () => {
  useEffect(() => {
    const savedData = sessionStorage.getItem('rolesData')
    if (!savedData) {
      sessionStorage.setItem("rolesData", JSON.stringify(staticData));
    }
  },[])


  return (
    <div className="flex flex-col w-full">
      <PageHeader
        pageTitle="Settings"
        pageDesc="Manage your team and preferences here."
      />

      <div className="bg-white border-gray-300 border divide-x divide-gray-300 shadow-xs md:rounded-md w-auto lg:w-fit  flex flex-row items-center h-full  mt-6 -mx-4 md:mx-0 overflow-x-auto">
        {SETTINGS_TABS.map((tab) => {
          return (
            <NavLink
              to={tab.href}
              key={tab.id}
              className={({ isActive }) =>
                `px-4 py-3 text-md leading-5 cursor-pointer whitespace-nowrap ${isActive ? "text-gray-900 bg-gray-100" : "text-gray-700 hover:bg-gray-50"}`
              }
            >
              {tab.label}
            </NavLink>
          );
        })}
      </div>

      <SettingsOutlet />
    </div>
  );
};

export default SettingsPage;
