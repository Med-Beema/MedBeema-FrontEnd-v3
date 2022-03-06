import React from "react";

function Navbar() {
  return (
    <div className=" bg-mb-black-100 text-white">
      <div className="container">
        <nav className="flex justify-between items-center align-middle h-20">
          <h1 className="nav-brand text-3xl font-bold ">MedBeema</h1>

          <ul className="nav-items flex flex-row gap-16 text-lg">
            <li className="nav-item active">Get Cover</li>
            <li className="nav-item">Tokens</li>
            <li className="nav-item">Claims</li>
          </ul>

          <button className="bg-mb-purple rounded-lg py-2.5 px-7">
            Connect Wallet
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
