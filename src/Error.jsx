import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import error from "./assets/images/404.jpg";
import { useNavigate } from "react-router-dom";
import { useAppLoading } from "./App";

export default function Error404() {
  const navigate = useNavigate();
  const setAppLoading = useAppLoading();
  const style =
    "flex gap-4 mt-12 bg-primary items-center font-prime font-semibold text-[2.5rem] text-high_1 tracking-wide px-12 py-6 rounded-full disabled:opacity-50 transition-all hover:bg-sec_1 hover:text-high_2";

  return (
    <div className="flex items-center flex-col">
      <img src={error} alt="404" className="w-full" />

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
    </div>
  );
}
