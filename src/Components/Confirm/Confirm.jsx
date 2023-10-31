import "./Confirm.css";
import { useData } from "../../Context & Data/GlobalContext";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAppLoading } from "../../App";

const DateSuffix = ["st", "nd", "rd", "th"];

const Day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DisplayPhone({ data }) {
  const phoneArr = String(data.phone).split("");
  const newPhone = [];
  for (let i = phoneArr.length - 1; i >= 0; i--) {
    if (
      i == phoneArr.length - 4 ||
      i == phoneArr.length - 7 ||
      i == phoneArr.length - 10
    ) {
      newPhone.unshift(" ");
    }
    newPhone.unshift(phoneArr[i]);
  }

  return <td>{newPhone.join("")}</td>;
}

function DisplayDate({ data }) {
  const date = new Date(data.date.startDate);

  return (
    <td>
      {`${Day[date.getDay()]}, ${Month[date.getMonth()]} ${date.getDate()}`}
      <sup>{`${
        date.getDate() % 10 == 1
          ? DateSuffix[0]
          : date.getDate() % 10 == 2
          ? DateSuffix[1]
          : date.getDate() % 10 == 3
          ? DateSuffix[2]
          : DateSuffix[3]
      }`}</sup>
      {`, ${date.getFullYear()}`}
    </td>
  );
}

export default function Confirm() {
  const data = useData();
  const navigate = useNavigate();
  const setAppLoading = useAppLoading();

  return (
    <main className="w-full">
      <article className="title">
        <section className="font-prime tracking-wide">
          <div className="leading-[1.1]">
            <h1 className="text-sec_1 text-[5rem]">Confirm Your Reservation</h1>
          </div>
          <p className=" text-high_1 font-sec font-semibold text-[1.75rem] my-4">
            Please review your reservation details below and confirm to proceed
          </p>
        </section>
      </article>
      <article className="details">
        <button
          className="edit"
          onClick={() => {
            setAppLoading(true);
            setTimeout(() => {
              navigate("/reserve-a-table");
              setAppLoading(false);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }, 1500);
          }}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Edit Your Reservation Details
        </button>
        <h1 className="font-prime font-medium font-high_2 text-[3.5rem] mb-4">
          Your Reservation Details
        </h1>
        <table>
          <tbody>
            <tr>
              <th className="font-sec_i text-[2.25rem] font-bold w-[22.5vw]">
                Customer info
              </th>
              <th>Full name:</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th></th>
              <th>Email address:</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th></th>
              <th>Phone Number:</th>
              <DisplayPhone data={data} />
            </tr>
          </tbody>
        </table>
        <hr className="border-primary border my-12" />
        <table>
          <tbody>
            <tr>
              <th className="font-sec_i text-[2.25rem] font-bold w-[22.5vw]">
                Reservation Details
              </th>
              <th>Reserved Date:</th>
              <DisplayDate data={data} />
            </tr>
            <tr>
              <th></th>
              <th>Reserved Time:</th>
              <td>{data.time}</td>
            </tr>
            <tr>
              <th></th>
              <th>No. of guests:</th>
              <td>{data.no_guests}</td>
            </tr>
            <tr>
              <th></th>
              <th>Occasion:</th>
              <td>
                {data.occasion.length > 0 ? data.occasion : "Not specified"}
              </td>
            </tr>
            <tr>
              <th></th>
              <th className="align-top">Special requirements:</th>
              <td>{data.special_req.length > 0 ? data.special_req : "None"}</td>
            </tr>
          </tbody>
        </table>
        <Formik
          initialValues={{
            terms_agree: false,
          }}
          onSubmit={() => {}}
          validateOnMount>
          {({ errors, touched, isValid }) => (
            <Form onSubmit={e => e.preventDefault()}>
              <label htmlFor="terms_agree" className="flex items-center mt-12">
                <Field
                  type="checkbox"
                  name="terms_agree"
                  id="terms_agree"
                  className="checkbox"
                  validate={value => {
                    if (!value) return "Please agree to the terms";
                  }}
                />
                <p className="font-sec_i text-primary font-bold text-[1.5rem]">
                  I have acknowledged that my table will only be reserved for an
                  hour
                </p>
                {errors.terms_agree && touched.terms_agree && (
                  <div className="flex items-center gap-4 ml-8">
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      size="xl"
                      color="#ed3548"
                    />
                    <p className="font-bold font-sec text-[1.25rem] text-strawberry">
                      {errors.terms_agree}
                    </p>
                  </div>
                )}
              </label>
              <button
                type="submit"
                className={`final-confirm${
                  isValid ? " hover:bg-sec_1 hover:text-high_2" : ""
                } bg-primary`}
                disabled={!isValid}
                onClick={() => {
                  setAppLoading(true);
                  setTimeout(() => {
                    navigate("/thank-you");
                    setAppLoading(false);
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                  }, 3000);
                }}>
                Confirm Reservation
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Form>
          )}
        </Formik>
      </article>
    </main>
  );
}
