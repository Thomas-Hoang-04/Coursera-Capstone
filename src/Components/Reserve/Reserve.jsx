import "./Reserve.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  useData,
  useSetData,
  useAvailable,
} from "../../Context & Data/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import DateTimeSelector from "./TimeSelector";
import { useNavigate } from "react-router-dom";
import { useAppLoading } from "../../App";

export function DataInput({
  field,
  type = "text",
  errors = null,
  touched = null,
  desc,
  pld,
  setFieldTouched,
  setFieldValue,
  handleChange,
  as = null,
}) {
  return (
    <section className="data-inp w-[50vw]">
      <div className="flex justify-between">
        <label htmlFor={field}>{desc}</label>
        {errors && touched && (
          <div className="flex items-center gap-4 ml-8">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size="xl"
              color="#ed3548"
            />
            <p className="font-semibold text-strawberry">
              {errors}
              {errors == "Please provide your" && ` ${desc.toLowerCase()}`}
            </p>
          </div>
        )}
      </div>
      <Field
        type={type}
        name={field}
        id={field}
        as={as != null ? as : "input"}
        placeholder={pld}
        className={`form-input${
          errors && touched ? " border-2 border-strawberry" : ""
        }`}
        onChange={e => {
          setFieldValue(field, e.target.value);
          setFieldTouched(field, true);
          handleChange(e);
        }}
      />
    </section>
  );
}

export default function Reserve() {
  const data = useData();
  const setData = useSetData();
  const available = useAvailable();
  const redirect = useNavigate();
  const setAppLoading = useAppLoading();

  const handleSubmit = () => {
    setAppLoading(true);
    setTimeout(() => {
      redirect("/confirm-reservation");
      setAppLoading(false);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 2000);
  };

  return (
    <main className="w-full">
      <article className="title">
        <section className="font-prime tracking-wide">
          <div className="leading-[1.1]">
            <h1 className="text-sec_1 text-[5rem]">Make A Reservation</h1>
          </div>
          <p className=" text-high_1 font-sec font-semibold text-[1.75rem] my-4">
            Please fill in the form below to make a reservation at the Little
            Lemon Chicago restaurant
          </p>
        </section>
      </article>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required("Please provide your"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Please provide your"),
          phone: Yup.string()
            .matches(/^\+[1-9](?:[0-9]\x20?){5,13}[0-9]$/, {
              message: "Invalid phone number",
              excludeEmptyString: true,
            })
            .required("Please provide your"),
          date: Yup.object({
            startDate: Yup.string().required("Please select a date"),
            endDate: Yup.string().required("Please select a date"),
          }),
          time: Yup.string().required("Please select a time"),
          no_guests: Yup.number()
            .min(1, "Minimum 1 guest")
            .max(8, "Maximum 8 guests")
            .required("Please specify the number of guests"),
          special_req: Yup.string().max(
            150,
            "The message is too long. Please limit to 150 characters"
          ),
        })}
        validateOnMount>
        {({
          errors,
          touched,
          isValid,
          values,
          setFieldTouched,
          setFieldValue,
          handleChange,
        }) => (
          <Form
            className="flex flex-col items-center"
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}>
            <section className="guest-info">
              <h1 className="font-prime font-medium text-[3.5rem]">
                Customer Infomation
              </h1>
              <DataInput
                field="name"
                errors={errors.name}
                touched={touched.name}
                desc="Name"
                pld="e.g. Stephen King"
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
              <DataInput
                field="email"
                errors={errors.email}
                touched={touched.email}
                desc="Email Address"
                pld="e.g. stephenking@gmail.com"
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
              <DataInput
                field="phone"
                errors={errors.phone}
                touched={touched.phone}
                desc="Phone Number"
                pld="e.g. +1 234 567 890"
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
            </section>

            <section className="guest-info pt-0">
              <h1 className="font-prime font-medium text-[3.5rem]">
                Reservation Details
              </h1>
              <DateTimeSelector name="date" desc="Select a date" id="date" />
              <DataInput
                field="occasion"
                desc="Occasion"
                pld="Purpose of the reservation"
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
              <DataInput
                type="textarea"
                errors={errors.special_req}
                touched={touched.special_req}
                field="special_req"
                desc="Special Requests"
                pld="Special requests for the reservation"
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
            </section>

            <section className="confirm">
              <button
                type="submit"
                className={`flex gap-4 items-center font-prime font-semibold text-[2rem] text-high_1 bg-primary tracking-wide px-10 py-4 rounded-full disabled:opacity-50${
                  !(
                    (!isValid && !available.avaliable) ||
                    (!isValid && available.available)
                  )
                    ? " hover:bg-sec_1 hover:text-high_2 transition-all"
                    : ""
                }`}
                disabled={
                  available.available == null
                    ? true
                    : (isValid && !available.available) ||
                      (!isValid && available.available)
                }
                onClick={() => setData(values)}>
                Confirm Reservation
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </main>
  );
}
