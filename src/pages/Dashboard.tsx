import ApplicationDetails from "@/components/overview/ApplicationDetails";
import AuditLogs from "@/components/overview/AuditLogs";
import DocumentsViewer from "@/components/overview/DocumentsViewer";
import ExternalReference from "@/components/overview/ExternalReference";
import { BASE_PAGE_URL } from "@/constants/url.constant";
import { Download } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Application", isActive: true },
    { id: 2, name: "Documents", isActive: false },
    { id: 3, name: "External References", isActive: false },
    { id: 4, name: "Audit Logs", isActive: false },
  ]);
  const navigate = useNavigate();
  return (
    <div>
      {/* tabs  */}
      <div className="grid grid-cols-5 ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="px-1 py-2 cursor-pointer"
            onClick={() => {
              if (tab.isActive) return;
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
          <ExternalReference />
        )}
        {tabs.find((tab) => tab.isActive)?.name === "Audit Logs" && (
          <AuditLogs />
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
        <div className="flex items-center justify-end gap-10">
          <button
            className="btn btn-secondary text-[#707070]"
            onClick={() => navigate(`/${BASE_PAGE_URL}/overview`)}
          >
            Back
          </button>

          <button className="btn btn-danger text-[#EC1C23]">Reject</button>
          <button className="btn btn-success text-[#029588]">Approve</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
