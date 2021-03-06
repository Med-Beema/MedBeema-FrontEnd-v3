import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Constants from "../../constants";
import "./claims.css";

export default function Claims() {
  const navigate = useNavigate();
  const [allClaimsData, setAllClaimsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${Constants.baseURL}/claimall`);
      const json = await data.json();
      //setData(json);
      setAllClaimsData(json);
      //console.log(json);
    };
    fetchData().catch(console.error);
  }, []);
  const handleClick = () => {
    console.log();
    navigate("../claimdetails");
  };

  return (
    <div>
      <div className="myClaims">
        <div className="mt-6 panelBody">
          <div className="flex flex-row justify-between">
            <div className="text-xl text-[#3D3838] py-2 font-[550]">
              My Claims
            </div>
            <Link to="/FileClaim">
              <button className="bg-mb-purple rounded-lg py-2.5 px-7 text-lg text-[white]">
                File a Claim
              </button>
            </Link>
          </div>
          <div className="py-6">
            <table className="min-w-full">
              <thead className="text-lg text-[#7A7A7A] font-semibold border-b ">
                <tr>
                  <th>Claim ID</th>
                  <th>Claimed Amount</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {allClaimsData.map(function (claims, index) {
                  //console.log(claims);
                  return (
                    <tr className="border-b  text-lg text-[#7A7A7A] font-regular text-center">
                      <td className="py-4 px-6 whitespace-nowrap">
                        {claims.claimId}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        {claims.amount}
                      </td>
                      {(() => {
                        switch (claims.status) {
                          case "Voting":
                            return (
                              <td className="py-4 px-6 whitespace-nowrap text-[#ebe834]">
                                {claims.status}
                              </td>
                            );
                          case "Assessment":
                            return (
                              <td className="py-4 px-6 whitespace-nowrap text-mb-purple">
                                {claims.status}
                              </td>
                            );
                          case "Accepted":
                            return (
                              <td className="py-4 px-6 whitespace-nowrap text-mb-green">
                                {claims.status}
                              </td>
                            );
                          case "Rejected":
                            return (
                              <td className="py-4 px-6 whitespace-nowrap text-[#F93636]">
                                {claims.status}
                              </td>
                            );
                          default:
                            return null;
                        }
                      })()}
                      <td className="py-4 px-6 whitespace-nowrap  grid place-content-center">
                        <div
                          className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white"
                          // onClick={handleClick}
                        >
                          <Link to={`/claimdetails/${claims.claimId}`}>
                            View Details
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="myClaims">
        <div className="mt-6 panelBody">
          <div className="flex flex-row justify-between">
            <div className="text-xl text-[#3D3838] py-2 font-[550]">
              All Claims
            </div>
          </div>
          <div className="py-6">
            <table className="min-w-full">
              <thead className="text-lg text-[#7A7A7A] font-semibold border-b ">
                <tr>
                  <th>Claim ID</th>
                  <th>Policyholder Address</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  text-lg text-[#7A7A7A] font-regular text-center">
                  <td className="py-4 px-6 whitespace-nowrap">1</td>
                  <td className="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td className="py-4 px-6 whitespace-nowrap text-[#F93636]">
                    Rejected
                  </td>
                  <td className="py-4 px-8 ml-15 whitespace-nowrap text grid place-content-center">
                    <div
                      className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white"
                      onClick={handleClick}
                    >
                      View Details
                    </div>
                  </td>
                </tr>

                <tr className="border-b  text-lg text-[#7A7A7A] font-regular text-center">
                  <td className="py-4 px-6 whitespace-nowrap">1</td>
                  <td className="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td className="py-4 px-6 whitespace-nowrap text-[#F93636]">
                    Rejected
                  </td>
                  <td className="py-4 px-8 whitespace-nowrap  grid place-content-center">
                    <div className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white">
                      View Details
                    </div>
                  </td>
                </tr>

                <tr className="border-b  text-lg text-[#7A7A7A] font-regular text-center">
                  <td className="py-4 px-6 whitespace-nowrap">1</td>
                  <td className="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td className="py-4 px-6 whitespace-nowrap text-[#ebe834]">
                    Voting
                  </td>
                  <td className="py-4 px-8 whitespace-nowrap  grid place-content-center">
                    <div className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white">
                      View Details
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
