import { Outlet } from "react-router-dom";
import Sidebar from "./features/sidebar/Sidebar";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-cols-[15rem,1fr] grid-rows-2">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
