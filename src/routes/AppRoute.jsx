import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCovers from "../components/AllCovers/AllCovers";
import ClaimResult from "../components/Claims/ClaimResult";
import ClaimsDetails from "../components/Claims/ClaimsDetails";
import MyDetails from "../components/MyDetails/MyDetails";
import Stake from "../components/Stake/Stake";
import ClaimsPage from "../views/ClaimsPage";
import CoverPage from "../views/CoverPage";
import TokenPage from "../views/TokenPage";

function AppRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<CoverPage />}>
        <Route path="" element={<MyDetails />} />
        <Route path="AllCovers" element={<AllCovers />} />
      </Route>
      <Route path="/tokens" element={<TokenPage />} />
      <Route path="/claims" element={<ClaimsPage />} />
      <Route path="/claimdetails" element={<ClaimsDetails />} />
      <Route path="/claimresults" element={<ClaimResult />} />
      <Route path="/stake" element={<Stake />} />
    </Routes>
  );
}

export default AppRoute;
