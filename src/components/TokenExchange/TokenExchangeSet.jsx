import React from "react";
import TokenBuyButton from "./TokenBuyButton";
import TokenExchangeCard from "./TokenExchangeCard";

function TokenExchangeSet({ tokenName }) {
  return (
    <div>
      <div className="grid grid-cols-2  gap-x-20">
        <div>
          <TokenExchangeCard currency="ETH" type="Pay" />
        </div>
        <div>
          <TokenExchangeCard currency={tokenName} type="Receive" />
        </div>
      </div>

      <div className="grid place-items-center">
        <div className="flex items-center">
          <ul className="flex flex-row gap-5 text-lg">
            <TokenBuyButton tokenName={tokenName} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TokenExchangeSet;
