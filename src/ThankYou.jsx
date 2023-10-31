import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAppLoading } from "./App";

import success from "./assets/images/Success.png";
import "./ThankYou.css";

export default function ThankYou() {
  const navigate = useNavigate();
  const setAppLoading = useAppLoading();
  const style =
    "flex gap-4 mt-12 bg-primary items-center font-prime font-semibold text-[2rem] text-high_1 tracking-wide px-10 py-4 rounded-full disabled:opacity-50 transition-all hover:bg-sec_1 hover:text-high_2";

  return (
    <main className="thank-you">
      <img src={success} alt="Success" className="w-[20rem]" />
      <article>
        <h1 className="font-prime text-[4.5rem] leading-[4rem] mb-4 text-primary font-medium">
          Reservation Successful
        </h1>
        <h2 className="font-sec_i text-high_2 text-[1.75rem] mb-2 font-semibold">
          Thank you for booking at The Little Lemon Restaurant
        </h2>
        <p className="font-sec text-[1.5rem]">
          Your reservation details will be sent to your email shortly. For
          further customer support, please contact us at{" "}
          <span>littlelemon@gmail.com</span> or call{" "}
          <span>+1 (775) 863-7196</span>
        </p>
        <button
          className={style}
          onClick={() => {
            setAppLoading(true);
            setTimeout(() => {
              navigate("/");
              setAppLoading(false);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }, 1500);
          }}>
          Back To Home
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </article>
    </main>
  );
}
