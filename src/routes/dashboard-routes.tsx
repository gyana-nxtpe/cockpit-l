import Dashboard from "@/pages/Dashboard";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default DashboardRoutes;
