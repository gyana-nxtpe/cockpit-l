import Wrapper from "./components/wrapper/wrapper";
import React, { useState } from "react";
import DashboardRoutes from "routes/dashboard-routes";
import "./tailwind.css";
import { BASE_PAGE_URL } from "./constants/url.constant";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  return (
    <>
      {isLoggedIn ? (
        <Wrapper>
          <DashboardRoutes />
        </Wrapper>
      ) : (
        <Routes>
          <Route path={`${BASE_PAGE_URL}`}>
            <Route index element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="." replace />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
