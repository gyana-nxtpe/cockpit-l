import logo from "../assets/logo.png";
import { LayoutDashboard } from "lucide-react";
import React from "react";

const SidePanel = () => {
  return (
    <div className="bg-white shadow-md w-[6%] fixed h-full ">
      <div className="h-16 w-16 object-contain mx-auto mt-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-center text-blue-600  mt-8 border-r-2 border-blue-600">
          <LayoutDashboard />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
