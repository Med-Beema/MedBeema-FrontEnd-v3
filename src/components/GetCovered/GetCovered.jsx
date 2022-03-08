import React from "react";
import Cards from "../Cards/Cards";

export default function GetCovered() {
  return (
    <div>
      <div className="grid place-items-center">
        <nav className="flex justify-between items-center h-20">
          <ul className="flex flex-row gap-16 text-lg">
            <li className="nav-item-getCovered active">My Details</li>
            <li className="nav-item-getCovered">All Covers</li>
          </ul>
        </nav>
        <Cards />
      </div>
    </div>
  );
}
