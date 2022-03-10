import React from "react";

export default function Stake() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="px-40 mt-20 grid place-items-left bg-[#f9f9fe]">
          <div class="w-[500px] h-[350px] rounded shadow-md shadow-[4px 4px 4px rgba(0, 0, 0, 0.25)] bg-[#ffffff]">
            <div class="m-10 space-y-4">
              <label class="text-black text-lg font-regular" for="username">
                Number of Tokens
              </label>
              <input
                class="h-14 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-purple focus:outline-purple focus:shadow-outline"
                type="numeric"
              ></input>
            </div>
            <div className="pt-10 grid place-items-center">
              {" "}
              <button className="bg-mb-green text-white rounded-lg py-2.5 px-24">
                Stake
              </button>
            </div>
          </div>
        </div>
        <div className="px-40 mt-20 grid place-items-left bg-[#f9f9fe]">
          <div class="w-[500px] h-[350px] rounded shadow-md shadow-[4px 4px 4px rgba(0, 0, 0, 0.25)] bg-[#ffffff]">
            <div class="m-10 space-y-4">
              <label class="text-black text-lg font-regular" for="username">
                Number of Tokens
              </label>
              <input
                class="h-14 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-purple focus:outline-purple focus:shadow-outline"
                type="numeric"
              ></input>
            </div>
            <div className="pt-10 grid place-items-center">
              {" "}
              <button className="bg-mb-green text-white rounded-lg py-2.5 px-24">
                UnStake
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
