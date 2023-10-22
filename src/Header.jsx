import { Link } from "react-router-dom";

import logo from "./assets/images/Logo.svg";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-around p-8">
      <Link to="">
        <img src={logo} className="mx-8 h-[4rem]" />
      </Link>
      <nav className="px-4 flex justify-center items-center">
        <ul className="flex gap-8 font-semibold text-[1.25rem] font-sec">
          <li>
            <a href="/#about">About Us</a>
          </li>
          <li>
            <Link to="/reserve-a-table">Reservations</Link>
          </li>
          <li>
            <Link to="">Home Order</Link>
          </li>
        </ul>
        <button className="bg-sec_1 mx-8 p-3 px-8 font-sec font-bold text-[1.3rem] rounded-[1rem]">
          <Link to="">Login</Link>
        </button>
      </nav>
    </header>
  );
}
