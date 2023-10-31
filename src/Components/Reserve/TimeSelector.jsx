import Datepicker from "react-tailwindcss-datepicker";
import { Field, useField, useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCaretDown,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  useSetData,
  useAvailable,
  useSetAvailable,
} from "../../Context & Data/GlobalContext";

export default function DateTimeSelector({ desc, id, ...props }) {
  const {
    setFieldValue,
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
    setValues,
    isValid,
  } = useFormikContext();
  const [field, meta] = useField(props);
  const [refTime, setRefTime] = useState("");
  const setData = useSetData();
  const available = useAvailable();
  const setAvailable = useSetAvailable();

  return (
    <>
      {available.loading && (
        <article className="flex gap-6 my-3 items-center">
          <div className="custom-loader"></div>
          <p className="text-primary font-sec_i font-bold text-[1.35rem]">
            Checking for available tables
          </p>
        </article>
      )}
      {!available.loading &&
        available.available != null &&
        (available.available ? (
          <article className="avail">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#495e57" />
            <p>Tables are available at the selected period</p>
          </article>
        ) : (
          <article className="no-avail">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size="lg"
              color="#e67745"
            />
            <p>
              No tables available at the selected period. Please choose another
              date and time
            </p>
          </article>
        ))}
      <section className="flex gap-10 w-max mt-4">
        <section className="data-inp">
          <label htmlFor={id}>{desc}</label>
          <Datepicker
            {...field}
            id={id}
            minDate={new Date()}
            asSingle={true}
            placeholder="Select a date"
            inputClassName="date-input"
            toggleClassName="calendar relative p-3 bg-sec_1 border-2 border-sec_1 rounded-r-lg"
            containerClassName="flex w-[30vw]"
            displayFormat="MM/DD/YYYY"
            onChange={value => {
              setFieldValue(field.name, value);
              setFieldTouched(field.name, true);
              setFieldValue("time", null);
              setRefTime(value.startDate);
              setValues({
                ...values,
                date: {
                  startDate: value.startDate,
                  endDate: value.endDate,
                },
              });
              setData(draft => {
                draft.date.startDate = value.startDate;
                draft.date.endDate = value.endDate;
                draft.time = null;
              });
              setAvailable(draft => {
                draft.available = null;
              });
            }}
          />
          {meta.error && meta.touched && (
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                color="#ed3548"
              />
              <p className="font-semibold text-strawberry">
                {meta.error.startDate}
              </p>
            </div>
          )}
        </section>
        <section className="data-inp">
          <label htmlFor="time">Select a time</label>
          <section className="flex items-center">
            <Field
              as="select"
              className="select"
              id="time"
              value={values.time}
              placeholder="Select a time"
              name="time"
              onFocus={() => {
                setAvailable(draft => {
                  draft.available = null;
                });
              }}
              onChange={e => {
                setFieldValue("time", e.target.value);
                setFieldTouched("time", true);
                setData(draft => {
                  draft.time = e.target.value;
                });
                handleChange(e);
              }}>
              <Options value={refTime} />
            </Field>
            <span className="relative right-8 pointer-events-none">
              <FontAwesomeIcon icon={faCaretDown} size="lg" color="#495e57" />
            </span>
          </section>
          {errors.time && touched.time && (
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                color="#ed3548"
              />
              <p className="font-semibold text-strawberry">{errors.time}</p>
            </div>
          )}
        </section>
        <section className="data-inp">
          <label htmlFor="guests">Guests number</label>
          <section className="flex items-center">
            <Field
              type="number"
              className="select"
              id="guests"
              placeholder="Number of guests"
              name="no_guests"
              onFocus={() => {
                setAvailable(draft => {
                  draft.available = null;
                });
              }}
              onChange={e => {
                setFieldValue("no_guests", e.target.value);
                setFieldTouched("no_guests", true);
                handleChange(e);
                setData(draft => {
                  draft.no_guests =
                    e.target.value.length == 0 ||
                    Number(e.target.value) < 1 ||
                    Number(e.target.value) > 8
                      ? ""
                      : e.target.value;
                });
                setAvailable(draft => {
                  draft.available = null;
                });
              }}
            />
          </section>
          {errors.no_guests && touched.no_guests && (
            <div className="flex items-center gap-4 w-[15rem]">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                color="#ed3548"
              />
              <p className="font-semibold text-strawberry">
                {errors.no_guests}
              </p>
            </div>
          )}
        </section>
      </section>
    </>
  );
}

function Options({ value }) {
  const day = new Date(value).getDay();
  const weekdays_hours = [
    "9:30",
    "10:30",
    "11:30",
    "12:30",
    "13:30",
    "14:30",
    "15:30",
    "16:30",
    "17:30",
    "18:30",
    "19:30",
    "20:30",
  ];
  const weekend_hours = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  return (
    <>
      <option value="" hidden>
        Select a time
      </option>
      {day == 6 || day == 0 ? (
        <>
          {weekend_hours.map(hour => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </>
      ) : (
        <>
          {weekdays_hours.map(hour => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </>
      )}
    </>
  );
}
