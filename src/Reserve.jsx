import "./Reserve.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";

export function Reserve() {
  return (
    <main className="w-full">
      <article className="title">
        <section className="font-prime tracking-wide">
          <div className="leading-[1.1]">
            <h1 className="text-sec_1 text-[5rem]">Make A Reservation</h1>
          </div>
          <p className=" text-high_1 font-sec font-semibold text-[1.5rem] my-4">
            Please fill in the form below to make a reservation at the Little
            Lemon Chicago restaurant
          </p>
        </section>
      </article>
      <Formik initialValues={{}} />
    </main>
  );
}
