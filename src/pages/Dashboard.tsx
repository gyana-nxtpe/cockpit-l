import ApplicationDetails from "@/components/overview/ApplicationDetails";
import DocumentsViewer from "@/components/overview/DocumentsViewer";
import { Download } from "lucide-react";
import React, { useState } from "react";

const Dashboard = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Application", isActive: true },
    { id: 2, name: "Documents", isActive: false },
    { id: 3, name: "External References", isActive: false },
    { id: 4, name: "Audit Logs", isActive: false },
  ]);
  return (
    <div>
      {/* tabs  */}
      <div className="grid grid-cols-5 ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="px-1 py-2 cursor-pointer"
            onClick={() => {
              setTabs(
                tabs.map((t) =>
                  t.id === tab.id
                    ? { ...t, isActive: true }
                    : { ...t, isActive: false }
                )
              );
            }}
          >
            <span
              className={`inline-block relative ${
                tab.isActive ? "font-semibold  half-border" : ""
              }`}
            >
              {tab.name}
            </span>
          </div>
        ))}

        {tabs.find((tab) => tab.isActive)?.name === "Application" && (
          <div className="flex items-center gap-2 text-xs">
            <Download size={18} /> Download Application
          </div>
        )}
      </div>

      {/* tabs content */}
      <div className="mt-4">
        {tabs.find((tab) => tab.isActive)?.name === "Application" && (
          <ApplicationDetails />
        )}
        {tabs.find((tab) => tab.isActive)?.name === "Documents" && (
          <DocumentsViewer />
        )}
        {tabs.find((tab) => tab.isActive)?.name === "External References" && (
          <div>External References</div>
        )}
        {tabs.find((tab) => tab.isActive)?.name === "Audit Logs" && (
          <div>Audit Logs</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
