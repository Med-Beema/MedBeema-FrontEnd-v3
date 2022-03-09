import React from "react";

function TokenBuyButton({ tokenName }) {
  return (
    <div>
      <button className="bg-mb-green rounded-lg py-2.5 px-7 mt-10">
        Buy {tokenName}
      </button>
    </div>
  );
}

export default TokenBuyButton;
