import React, { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

// 29:21

function Header() {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  // console.log(loggedUser);
  return (
    <div className="flex justify-between m-2 bg-slate-600">
      <div className="logoContainer">
        <img className="w-32  filter invert" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-4 relative">
  <Link to="/cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
      {cartItems.length}
    </span>
  </Link>
</li>

          {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <button
            className="px-4"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
          <li className="px-4">
            {loggedUser ? `Welcome😃 ${loggedUser}` : "Guest"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
