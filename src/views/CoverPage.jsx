import React from "react";
import Cards from "../components/Cards/Cards";
import GetCoveredHeading from "../components/GetCovered/GetCoveredHeading";

function CoverPage() {
  return (
    <div className="container">
      <div className="grid place-items-center">
        <GetCoveredHeading />
      </div>
      <div className="grid grid-cols-2  gap-x-20 ">
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default CoverPage;
