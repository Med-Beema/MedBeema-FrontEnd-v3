import React from "react";
import Cards from "../components/Cards/Cards";
import TokenExchangeBar from "../components/TokenExchange/TokenExchangeBar";

function TokenPage() {
  return (
    <div>
      <TokenExchangeBar />
      <div className="container">
        <div className="grid grid-cols-2  gap-x-20">
          <Cards />
          <Cards />
        </div>
        <div className="grid grid-cols-2  gap-x-20">
          <Cards />
        </div>
        
      </div>
    </div>
  );
}

export default TokenPage;
