import { LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md p-4 flex justify-between items-center">
      <div className="mr-4 flex items-center gap-2">
        <p className="text-sm text-gray-600"> Welcome Back! </p>
        <span className="font-semibold">Mark Smith</span>
      </div>
      <div
        className="bg-white h-10 w-10 flex items-center justify-center cursor-pointer rotate-180"
        onClick={() => navigate("/")}
      >
        {/* Profile icon */}
        <LogOut />
      </div>
    </div>
  );
};

export default Navbar;
