import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar"
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/common/Footer";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer/>
    </div>
  );
};

export default Layout;
