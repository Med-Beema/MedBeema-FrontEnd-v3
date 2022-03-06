import React from "react";
// import TokenExchangeCard from "./TokenExchangeCard";
import TokenExchangeSet from "./TokenExchangeSet";

function TokenExchangeBar() {
  return (
    <div className="bg-mb-black-100 py-8 px-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-32">
          <TokenExchangeSet currency="ITKN" />
          <TokenExchangeSet currency="CTKN" />
        </div>
      </div>
    </div>
  );
}

export default TokenExchangeBar;
