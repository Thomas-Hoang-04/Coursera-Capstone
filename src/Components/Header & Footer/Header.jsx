import { useNavigate, Link } from "react-router-dom";
import { useAppLoading } from "../../App";

import logo from "../../assets/images/Logo.svg";

export default function Header() {
  const navigate = useNavigate();
  const setLoading = useAppLoading();

  return (
    <header className="flex w-full items-center justify-around p-8">
      <Link to="">
        <img src={logo} className="mx-8 h-[4rem]" />
      </Link>
      <nav className="px-4 flex justify-center items-center">
        <ul className="flex gap-8 font-semibold items-center text-[1.25rem] font-sec">
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
        <button
          className="bg-sec_1 mx-8 p-3 px-8 font-sec font-bold text-[1.3rem] rounded-[1rem] hover:bg-primary hover:text-high_1 transition-all"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              navigate("/reserve-a-table");
              setLoading(false);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }, 1500);
          }}>
          Login
        </button>
      </nav>
    </header>
  );
}
