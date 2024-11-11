import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { LoginProvider } from "../Utility/LoginContext";

export default function MainLayout() {
  return (
    <>
      <LoginProvider>
        <Navbar />
        <div className="min-h-[calc(100vh-315px)]">
          <Outlet />
        </div>
        <Footer />
      </LoginProvider>
    </>
  );
}
