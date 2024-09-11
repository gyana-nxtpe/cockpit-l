import Wrapper from "./components/wrapper/wrapper";
import React, { useState } from "react";
import DashboardRoutes from "routes/dashboard-routes";
import "./tailwind.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <Wrapper>
          <DashboardRoutes />
        </Wrapper>
      ) : (
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      )}
    </>
  );
};

export default App;
