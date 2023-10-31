import { Link, useNavigate } from "react-router-dom";
import { card_data as data } from "./card_data";

import "./Home.css";
import food from "./assets/images/hero_food.jpg";
import a1 from "./assets/images/Mario and Adrian A.jpg";
import a2 from "./assets/images/Mario and Adrian b.jpg";
import Card from "./Card";
import { useAppLoading } from "./App";

export function Home() {
  const navigate = useNavigate();
  const setAppLoading = useAppLoading();

  return (
    <>
      <main className="w-full">
        <article className="hero">
          <section className="font-prime tracking-wide">
            <div className="leading-[1.1]">
              <h1 className="text-sec_1 text-[4rem]">Little Lemon</h1>
              <h2 className="text-high_1 text-[3rem]">Chicago</h2>
            </div>
            <p className="w-[22rem] text-high_1 font-sec font-semibold text-[1.4rem] my-4">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </p>
            <button
              className="table"
              onClick={() => {
                setAppLoading(true);
                setTimeout(() => {
                  navigate("/reserve-a-table");
                  setAppLoading(false);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }, 1500);
              }}>
              Reserve A Table
            </button>
          </section>
          <img
            src={food}
            className="h-[30rem] w-[27.5rem] rounded-[1rem] relative top-8"
          />
        </article>
        <article className="week-specials">
          <section className="font-prime tracking-wide flex items-center justify-around px-6">
            <h1 className="text-[4rem] font-medium">This week specials!</h1>
            <button
              className="table px-12"
              onClick={() => {
                setAppLoading(true);
                setTimeout(() => {
                  navigate("/reserve-a-table");
                  setAppLoading(false);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }, 1500);
              }}>
              Online menu
            </button>
          </section>
          <section className="flex items-stretch justify-center gap-[4rem] my-4">
            {data.map(info => (
              <Card
                key={info.name}
                name={info.name}
                price={info.price}
                description={info.description}
                imgLink={info.img_link}
              />
            ))}
          </section>
        </article>
        <article id="about" className="about">
          <section className="">
            <div className="leading-[1.1]">
              <h1 className="font-prime text-[5rem] font-medium">
                Little Lemon
              </h1>
              <h2 className="font-prime text-[2.75rem]">Chicago</h2>
            </div>
            <div className="font-sec_i my-10">
              <h2 className="font-semibold w-[25rem] text-[1.75rem] ">
                Opening hours:
              </h2>
              <p className="text-[1.5rem]">Weekdays: 9.30am - 9.30pm</p>
              <p className="text-[1.5rem]">Weekends: 9am - 8.30pm</p>
            </div>
            <p className="w-[30rem] leading-relaxed font-sec font-medium text-[1.5rem]">
              Our menu is inspired by the flavors of the Mediterranean, with a
              focus on healthy and wholesome ingredients. Whether you're in the
              mood for a hearty meal or a light snack, we've got something for
              everyone at Little Lemon
            </p>
          </section>
          <section className="flex flex-col">
            <img
              src={a1}
              className="w-[22.5rem] h-[20rem] relative rounded-2xl -right-[6rem]"
            />
            <img
              src={a2}
              className="w-[22.5rem] h-[20rem] relative -top-20 -left-[6rem] rounded-2xl"
            />
          </section>
        </article>
      </main>
    </>
  );
}
