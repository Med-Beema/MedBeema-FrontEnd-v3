import React from "react";
import TokenExchangeCard from "./TokenExchangeCard";

function TokenExchangeSet(props) {
  return (
    <div className="grid grid-cols-2  gap-x-20">
      <div>
        <TokenExchangeCard currency="ETH" type="Pay" />
      </div>
      <div>
        <TokenExchangeCard currency={props.currency} type="Receive" />
      </div>
    </div>
  );
}

export default TokenExchangeSet;
