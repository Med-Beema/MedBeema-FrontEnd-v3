import React from "react";
import { Route, Routes } from "react-router-dom";
import ClaimsPage from "../views/ClaimsPage";
import CoverPage from "../views/CoverPage";
import TokenPage from "../views/TokenPage";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/tokens" element={<TokenPage />} />
      <Route path="/claims" element={<ClaimsPage />} />
    </Routes>
  );
}

export default AppRoute;
