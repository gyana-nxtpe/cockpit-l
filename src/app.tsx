import { Wrapper } from "components";
import React, { Suspense } from "react";
import DashboardRoutes from "routes/dashboard-routes";
import "./styles.scss";
import "./tailwind.scss";

// import { useLocation } from "react-router";
const AuthN = React.lazy(() => import("app2/App"));
const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <DashboardRoutes />
      </Wrapper>
    </>
  );
};

export default App;
