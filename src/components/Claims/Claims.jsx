import React from "react";
import "./claims.css";

export default function Claims() {
  return (
    <div>
      <div className="myClaims">
        <div className="mt-6 panelBody">
          <div className="flex flex-row justify-between">
            <div className="text-xl text-[#3D3838] py-2 font-[550]">
              My Claims
            </div>
            <button className="bg-mb-purple rounded-lg py-2.5 px-7 text-lg text-[white]">
              File a Claim
            </button>
          </div>
          <div className="py-6">
            <table class="min-w-full">
              <thead class="text-lg text-[#7A7A7A] font-semibold border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700">
                <tr>
                  <th>Claim ID</th>
                  <th>Claimed Amount</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700 text-lg text-[#7A7A7A] font-regular text-center">
                  <td class="py-4 px-6 whitespace-nowrap">1</td>
                  <td class="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td class="py-4 px-6 whitespace-nowrap text-mb-green">
                    Accepted
                  </td>
                  <td class="py-4 px-8 whitespace-nowrap">
                    <div className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white">
                      View Details
                    </div>
                  </td>
                </tr>

                <tr class="border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700 text-lg text-[#7A7A7A] font-regular text-center">
                  <td class="py-4 px-6 whitespace-nowrap">1</td>
                  <td class="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td class="py-4 px-6 whitespace-nowrap text-mb-green">
                    Accepted
                  </td>
                  <td class="py-4 px-6 whitespace-nowrap">
                    <div className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white">
                      View Details
                    </div>
                  </td>
                </tr>

                <tr class="border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700 text-lg text-[#7A7A7A] font-regular text-center">
                  <td class="py-4 px-6 whitespace-nowrap">1</td>
                  <td class="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td class="py-4 px-6 whitespace-nowrap text-mb-green">
                    Accepted
                  </td>
                  <td class="py-4 px-6 whitespace-nowrap">
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

      <div className="myClaims">
        <div className="mt-6 panelBody">
          <div className="flex flex-row justify-between">
            <div className="text-xl text-[#3D3838] py-2 font-[550]">
              All Claims
            </div>
          </div>
          <div className="py-6">
            <table class="min-w-full">
              <thead class="text-lg text-[#7A7A7A] font-semibold border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700">
                <tr>
                  <th>Claim ID</th>
                  <th>Policyholder Address</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700 text-lg text-[#7A7A7A] font-regular text-center">
                  <td class="py-4 px-6 whitespace-nowrap">1</td>
                  <td class="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td class="py-4 px-6 whitespace-nowrap text-[#F93636]">
                    Accepted
                  </td>
                  <td class="py-4 px-8 ml-15 whitespace-nowrap text">
                    <div className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white">
                      View Details
                    </div>
                  </td>
                </tr>

                <tr class="border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700 text-lg text-[#7A7A7A] font-regular text-center">
                  <td class="py-4 px-6 whitespace-nowrap">1</td>
                  <td class="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td class="py-4 px-6 whitespace-nowrap text-[#F93636]">
                    Accepted
                  </td>
                  <td class="py-4 px-8 whitespace-nowrap">
                    <div className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white">
                      View Details
                    </div>
                  </td>
                </tr>

                <tr class="border-b dark:bg-gray-800 dark:border-[#7A7A7A]-700 text-lg text-[#7A7A7A] font-regular text-center">
                  <td class="py-4 px-6 whitespace-nowrap">1</td>
                  <td class="py-4 px-6 whitespace-nowrap">10 Ether</td>
                  <td class="py-4 px-6 whitespace-nowrap text-[#F93636]">
                    Accepted
                  </td>
                  <td class="py-4 px-8 whitespace-nowrap">
                    <div className="bg-mb-purple rounded-lg text-sm py-1 px-1 w-24 text-white">
                      View Details
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="py-8 mr-80 text-right text-lg text-purple font-regular">
              Voting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
