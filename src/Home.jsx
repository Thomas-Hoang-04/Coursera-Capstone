import { Link } from "react-router-dom";
import { card_data as data } from "./card_data";

import "./Home.css";
import food from "./assets/images/hero_food.jpg";
import a1 from "./assets/images/Mario and Adrian A.jpg";
import a2 from "./assets/images/Mario and Adrian b.jpg";
import Card from "./Card";

export function Home() {
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
            <button className="table">
              <Link to="/reserve-a-table">Reserve A Table</Link>
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
            <button className="table px-12">
              <Link to="/reserve-a-table">Online menu</Link>
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
            <p className="font-sec font-medium w-[25rem] text-[1.5rem] my-12">
              Culpa occaecat Lorem irure cillum ipsum reprehenderit occaecat
              adipisicing ipsum cillum dolore. Velit ut dolore ex adipisicing
              est esse esse laboris eu veniam id et officia. Magna magna minim
              commodo do fugiat quis laborum nisi incididunt incididunt eiusmod
              minim veniam.
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
