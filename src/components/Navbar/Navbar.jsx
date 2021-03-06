import React from "react";
import { NavLink } from "react-router-dom";
import { setUserId } from "../../Controllers/user";

function Navbar() {
  const handleClick = () => {
    setUserId(123);
  };
  return (
    <div className=" bg-mb-black-100 text-white">
      <div className="container">
        <nav className="flex justify-between items-center align-middle h-20">
          <h1 className="nav-brand text-3xl font-bold ">MedBeema</h1>

          <ul className="nav-items flex flex-row gap-16 text-lg">
            <NavLink exact="true" activeClassName="active" to="/">
              <li className="nav-item">Get Cover</li>
            </NavLink>
            <NavLink activeClassName="active" to="/tokens">
              <li className="nav-item">Tokens</li>
            </NavLink>
            <NavLink activeClassName="active" to={"/claims"}>
              <li className="nav-item">Claims</li>
            </NavLink>
            <NavLink activeClassName="active" to={"/stake"}>
              <li className="nav-item">Stake</li>
            </NavLink>
          </ul>

          <button
            className="bg-mb-purple rounded-lg py-2.5 px-7"
            onClick={handleClick}
          >
            Connect Wallet
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
