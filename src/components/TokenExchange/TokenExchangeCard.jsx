import React, { useEffect, useState } from "react";

function TokenExchangeCard(props) {
  return (
    <div className="border-2 border-white p-4 rounded-xl text-white">
      <h4>You {props.type}</h4>
      <div className="flex flex-row justify-around text-3xl text-center pt-4">
        <input
          type="numeric"
          value={0}
          className="w-24 text-right px-4 bg-transparent"
        />
        <h2 className="">{props.currency}</h2>
      </div>
    </div>
  );
}

export default TokenExchangeCard;
