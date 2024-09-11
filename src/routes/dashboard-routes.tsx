import Dashboard from "@/pages/Dashboard";
import Overview from "@/pages/Overview";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/overview" element={<Overview />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default DashboardRoutes;
