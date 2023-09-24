import DashboardNav from "../DashboardNav/DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardNav className="w-[20%]" />
      <div className="w-[80%] flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
