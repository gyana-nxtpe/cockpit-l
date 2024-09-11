import logo from "../assets/logo.png";
import React from "react";

const SidePanel = () => {
  return (
    <div className="bg-white shadow-md w-[10%] fixed h-full p-4">
      <div className="h-16 w-16 object-contain mx-auto">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default SidePanel;
