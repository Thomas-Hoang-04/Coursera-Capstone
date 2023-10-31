import { Link } from "react-router-dom";
import delivery from "./assets/images/delivery.png";

export default function Card({ name, price, description, imgLink }) {
  return (
    <section className="w-[320px] h-[548px] flex flex-col">
      <img src={imgLink} className="w-[320px] h-[210px] rounded-t-[1rem]" />
      <article className="bg-high_1 flex flex-col grow">
        <div className="p-4 px-6 flex justify-between items-center">
          <h1 className="font-prime text-[1.75rem] font-semibold">{name}</h1>
          <p className="font-sec text-sec_2 font-bold text-[1.3rem]">{price}</p>
        </div>
        <p className="px-6 pb-4 font-sec_i text-[1.2rem] grow me-4 text-primary tracking-normal">
          {description}
        </p>
        <button className="rounded-full bg-primary text-high_1 p-2 px-6 mx-4 my-8 font-sec font-bold text-[1.15rem] flex items-center justify-center gap-4 hover:bg-sec_1 hover:text-high_2 transition-all">
          <Link to="">Order A Delivery</Link>
          <img src={delivery} className="w-[1.5rem]" />
        </button>
      </article>
    </section>
  );
}
