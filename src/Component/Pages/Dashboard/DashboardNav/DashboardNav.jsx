import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <ul className=" bg-slate-500 py-4 px-6 text-xl space-y-2">
        <li className="p-2 rounded-md bg-slate-300">
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li className="p-2 rounded-md bg-slate-300">
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li className="p-2 rounded-md bg-slate-300">
          <Link to="/dashboard/editprofile">Edit Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
