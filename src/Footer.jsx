import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import footer_logo from "./assets/images/Logo.png";

export default function Footer() {
  return (
    <article className="footer">
      <img src={footer_logo} />
      <section className="grid grid-cols-2 gap-[6rem]">
        <div className="font-sec text-[1.25rem]">
          <h1 className="font-extrabold text-[1.75rem] mb-6 text-primary">
            Contact Us
          </h1>
          <div className="flex items-center gap-5 my-4">
            <FontAwesomeIcon icon={faLocationDot} color="#495e57" size="xl" />
            <p className="w-[16rem]">
              813 S Western Ave, Chicago, IL. 60612-4170
            </p>
          </div>
          <div className="flex items-center gap-4 my-4">
            <FontAwesomeIcon icon={faPhone} color="#495e57" size="xl" />
            <p className="w-[16rem]">+1 (775) 863-7196</p>
          </div>
          <div className="flex items-center gap-4 my-4">
            <FontAwesomeIcon icon={faEnvelope} color="#495e57" size="xl" />
            <p className="w-[16rem]">littlelemon@gmail.com</p>
          </div>
        </div>
        <div className="font-sec text-[1.25rem]">
          <h1 className="font-extrabold text-[1.75rem] mb-6 text-primary">
            Find Us On
          </h1>
          <a
            className="flex items-center gap-4 my-4"
            href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} color="#495e57" size="xl" />
            <p className="w-[16rem] text-[1.25rem]">Little Lemon</p>
          </a>
          <a
            className="flex items-center gap-4 my-4"
            href="https://twitter.com">
            <FontAwesomeIcon icon={faXTwitter} color="#495e57" size="xl" />
            <p className="w-[16rem] text-[1.25rem]">Little Lemon Chicago</p>
          </a>
          <a
            href="https://instagram.com"
            className="flex items-center gap-4 my-4">
            <FontAwesomeIcon icon={faInstagram} color="#495e57" size="xl" />
            <p className="w-[16rem] text-[1.25rem]">@littlelemon</p>
          </a>
        </div>
      </section>
    </article>
  );
}
