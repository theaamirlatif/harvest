import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../../shared/Header";
import Sidebar from "../../../shared/Sidebar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <ScrollToTop />
      <div className="flex h-screen overflow-hidden rounded-3xl">
        <Sidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="lg:mb-8">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
        </div>
        <main
          id="main-content"
          className="bg-[var(--color-bg)] flex-1 p-3 pt-[110px] md:pt-[120px] mb-0 overflow-auto"
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};
