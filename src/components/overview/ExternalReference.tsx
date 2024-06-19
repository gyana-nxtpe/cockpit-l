import CibilScoreComponent from "./CibilScoreComponent";
import { Download } from "lucide-react";
import React from "react";

const ExternalReference = () => {
  return (
    <div className="mt-6 mx-4">
      <div className="flex bg-white rounded-lg shadow">
        <CibilScoreComponent />
        <CibilScoreComponent />
        <CibilScoreComponent />
      </div>
      <div className="flex py-4 px-3 justify-between items-center bg-white mt-7 rounded-lg shadow">
        <span className="font-medium">Anti Money Laundering Report</span>
        <span className="flex items-center gap-2 cursor-pointer text-sm text-[#104181] ">
          <Download /> Download
        </span>
      </div>
    </div>
  );
};

export default ExternalReference;
