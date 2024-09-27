import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar"
import { Toaster } from "./components/ui/toaster";
const Layout = () => {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
