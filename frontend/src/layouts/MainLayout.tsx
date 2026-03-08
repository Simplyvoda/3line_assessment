import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <Navbar onClick={openDrawer} />

      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={closeDrawer}
        />
      )}

      <Sidebar drawerOpen={drawerOpen} />

      <main className="overflow-y-scroll w-full h-full py-6 px-4 md:px-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
