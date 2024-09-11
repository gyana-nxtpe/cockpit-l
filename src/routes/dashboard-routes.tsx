import { BASE_PAGE_URL } from "@/constants/url.constant";
import Dashboard from "@/pages/Dashboard";
import Overview from "@/pages/Overview";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={`${BASE_PAGE_URL}`}>
        <Route
          index
          element={<Navigate to="overview" replace />}
        />

        <Route path="overview" element={<Overview />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/*" element={<Navigate to="../dashboard" />} />
        <Route path="*" element={<Navigate to="overview" replace />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to={`${BASE_PAGE_URL}/overview`} replace />}
      />
    </Routes>
  );
};

export default DashboardRoutes;
