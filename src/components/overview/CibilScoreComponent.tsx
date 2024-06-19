import { Download } from "lucide-react";
import React from "react";
import GaugeChart from "react-gauge-chart";

const CibilScoreComponent = () => {
  return (
    <div className="flex-grow  py-3 px-4 border-r mx-auto">
      <span className="flex items-center gap-2 cursor-pointer text-xs">
        <Download size={15} /> Download
      </span>
      <div className="flex flex-col items-center">
        <span className="text-lg text-green-500 font-bold">884</span>
        <span className="text-xs">Excellent</span>
      </div>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={4}
        colors={["#E82D48", "#EDA635", "#EFD933", "#8CE249", "#3FD14A"]}
        arcWidth={0.3}
        percent={0.75}
        arcPadding={0.02}
        hideText
      />
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
