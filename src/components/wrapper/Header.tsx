import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* SidePanel */}
      <SidePanel />

      {/* Main content */}
      <div className="flex-1 ml-[10%] flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <div className="flex-1 p-4 bg-gray-50">{children}</div>
      </div>
    </div>
  );
};

export default Header;
