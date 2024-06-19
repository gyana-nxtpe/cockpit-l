
import React from "react";
import DashboardRoutes from "routes/dashboard-routes";
import Wrapper from "./components/wrapper/wrapper";



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
