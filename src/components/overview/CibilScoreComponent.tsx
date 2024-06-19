import { Download } from "lucide-react";
import React from "react";

const CibilScoreComponent = () => {
  return (
    <div className="flex-grow  py-3 px-4 border-r mx-auto">
      <span className="flex items-center gap-2 cursor-pointer text-xs">
        <Download size={15} /> Download
      </span>
      <div className="grid grid-cols-2 gap-y-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">Current Credit Score</span>
          <span className="text-sm font-medium">884</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">Rating</span>
          <span className="text-sm font-medium">EEE (Good)</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">Probability of Default</span>
          <span className="text-sm font-medium">40.18%</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">Likelihood to Default</span>
          <span className="text-sm font-medium">Likely</span>
        </div>
      </div>
    </div>
  );
};

export default CibilScoreComponent;
