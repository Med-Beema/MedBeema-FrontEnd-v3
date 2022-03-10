import React, { useEffect, useState } from "react";
import TokenBuyButton from "./TokenBuyButton";
import TokenExchangeCard from "./TokenExchangeCard";

function TokenExchangeSet({ tokenName }) {
  const exchangeRateToken = 0.01;
  const exchangeRateDollar = 2000;
  //   const isWalletConnected = props.isWalletConnected;
  const [tokenAmount, setTokenAmount] = useState(0);
  const [ethAmount, setEthAmount] = useState(tokenAmount * exchangeRateToken);

  function handleTokenChange(value) {
    setTokenAmount(value);
  }

  useEffect(() => {
    setEthAmount(tokenAmount * exchangeRateToken);
  }, [tokenAmount]);

  return (
    <div>
      <div className="grid grid-cols-2  gap-x-20">
        <div>
          <TokenExchangeCard
            currency={tokenName}
            type="Receive"
            tokenAmount={tokenAmount}
            setTokenAmount={setTokenAmount}
            handleTokenChange={handleTokenChange}
          />
        </div>
        <div>
          <TokenExchangeCard currency="ETH" type="Pay" ethAmount={ethAmount} />
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
