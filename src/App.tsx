import "./App.css";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DateInput from "./components/common/DateInputField";

function App() {
  const [customerType, setCustomerType] = useState("private");

  // useForm hook from react-hook-form
  const {
    // we use the register function to register the input fields
    register,
    // we use the handleSubmit function to handle the form submission
    handleSubmit,
    // we use the control object to control the form
    control,
    // we use the formState object to get the form state¨
    // like errors
    formState: { errors },
  } = useForm({
    // we set the default values of the form
    defaultValues: {
      firstName: "",
      lastName: "",
      telefon: null,
      email: "",
      activity: "",
      eventDate: "",
      activityStartTime: null,
      comment: null,
      companyName: null,
      cvr: null,
    },
  });

  function makeTimeOptions() {
    const timeOptions = [];
    for (let i = 8; i < 23; i++) {
      const formatTime = `${i < 10 ? "0" : ""}${i}:00`;
      timeOptions.push(<option value={formatTime}>{formatTime}</option>);
    }
    return timeOptions;
  }

  return (
    <div>
      <h1>AdventureXP - Booking</h1>

      <div>
        {/* ----------------radio button for private---------------- */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="radio"
            className="radio"
            value="private"
            checked={customerType === "private"}
            onChange={() => setCustomerType("private")}
          />
          Privat
          {/* ----------------radio button for bussiness---------------- */}
          <input
            type="radio"
            className="radio"
            value="business"
            checked={customerType === "business"}
            onChange={() => setCustomerType("business")}
          />
          Erhverv
        </label>
      </div>

      <form
        // we use the handleSubmit function to handle the form submission
        onSubmit={handleSubmit((data) => {
          // for now we just alert the form data
          console.log(data);
        })}
        className="form-container"
      >
        {customerType === "private" && (
          <div className="input-grid">
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.firstName ? "input-error" : ""
                }`}
              >
                Fornavn:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("firstName", { required: true })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
              </label>
            </div>

            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.lastName ? "input-error" : ""
                }`}
              >
                Efternavn:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("lastName", { required: true })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
              </label>
            </div>

            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.telefon ? "input-error" : ""
                }`}
              >
                Telefon:
                <input
                  type="tel"
                  maxLength={8}
                  className="grow"
                  {...register("telefon", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </label>
            </div>

            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.email ? "input-error" : ""
                }`}
              >
                Email:
                <input
                  type="email"
                  className="grow"
                  {...register("email", {
                    required: true,
                    // we use the pattern attribute to validate the email
                    pattern: /^\S+@\S+$/i,
                  })}
                  {...register("email", { required: true })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
              </label>
            </div>

            <div>
              {/* The Controller component is a wrapper component that connects components  (like my DateInput component) with React Hook Form. */}
              <Controller
                name="activity"
                // This prop is used to connect the Controller to the form context provided by the useForm hook.
                control={control}
                // This prop is used to define the rules for the input field.
                rules={{ required: true }}
                // This prop is used to render the select input field.
                render={({ field }) => (
                  <select
                    {...field}
                    className="select select-bordered w-full w-06"
                  >
                    <option disabled selected value="">
                      Vælg en aktivitet
                    </option>{" "}
                    <option value="gokart">Go-Kart</option>
                    <option value="paintball">Paintball</option>
                    <option value="biking">Biking</option>
                    <option value="sumo-wrestling">Sumo Wrestling</option>
                    <option value="mini-golf">Mini Golf</option>
                  </select>
                )}
              />
            </div>

            <div>
              <label
                className={`input input-bordered flex justify-center gap-2 w-96 ${
                  errors.eventDate ? "input-error" : ""
                }`}
              >
                {/* The Controller component is a wrapper component that connects components  (like my DateInput component) with React Hook Form. */}
                <Controller
                  // This prop is used to connect the Controller to the form context provided by the useForm hook.
                  control={control}
                  // This prop is used to define the name of the input field which also represents the key in the form data.
                  name="eventDate"
                  // This prop is used to define the rules for the input field.
                  rules={{ required: true }}
                  // This prop is used to render the input field from my DateInput component.
                  // The field prop is used to connect the input field to the form context provided by the useForm hook.
                  render={({ field }) => (
                    <DateInput key="eventDate" {...field} />
                  )}
                />
              </label>
            </div>

            <div>
              <select className="select select-bordered w-full w-96">
                <option disabled selected>
                  Vælg en start tid
                </option>
                {makeTimeOptions()}
              </select>
            </div>

            <div>
              {/*This is a empty div it is just a spacer for the grid*/}
            </div>

            <div>
              <textarea
                className="textarea textarea-bordered w-96 h-40"
                placeholder="Evt. kommentar til booking"
              ></textarea>
            </div>
          </div>
        )}

        {customerType === "business" && (
          <div>
            <label>Firma navn</label>
            <input
              type="text"
              {...register("companyName", { required: true })}
            />

            <label>CVR nummer</label>
            <input
              type="text"
              maxLength={8}
              {...register("cvr", { required: true })}
            />

            <h3>Fulde navn op kontakt person</h3>
            <label>Fornavn</label>
            <input
              type="text"
              // we use the register function to register the input fields
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <p>First name is required</p>}
            <label>Efternavn</label>
            <input type="text" {...register("lastName", { required: true })} />
            {/* we use the errors object to display the error message */}
            {errors.firstName && <p>Last name is required</p>}

            <label>Telefon nummer: </label>
            <input
              type="tel"
              maxLength={8}
              {...register("telefon", { required: true })}
            />

            <label>Email: </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                // we use the pattern attribute to validate the email
                pattern: /^\S+@\S+$/i,
              })}
              {...register("email", { required: true })}
            />

            <label>Aktiviteter</label>
            {/* The Controller component is a wrapper component that connects components  (like my DateInput component) with React Hook Form. */}
            <Controller
              name="activity"
              // This prop is used to connect the Controller to the form context provided by the useForm hook.
              control={control}
              // This prop is used to define the rules for the input field.
              rules={{ required: true }}
              // This prop is used to render the select input field.
              render={({ field }) => (
                <select {...field}>
                  <option value="adventure-day-package">Adventure Day</option>
                  <option value="high-energy-challenge-package">
                    High Energy Challenge
                  </option>
                  <option value="family-fun-day-package">Family Fun Day</option>
                  <option value="team-building-package">
                    Team Building Extravaganza
                  </option>
                  <option value="ultimate-challenge-package">
                    Ultimate Challenge
                  </option>
                </select>
              )}
            />

            {/* The Controller component is a wrapper component that connects components  (like my DateInput component) with React Hook Form. */}
            <Controller
              // This prop is used to connect the Controller to the form context provided by the useForm hook.
              control={control}
              // This prop is used to define the name of the input field which also represents the key in the form data.
              name="eventDate"
              // This prop is used to define the rules for the input field.
              rules={{ required: true }}
              // This prop is used to render the input field from my DateInput component.
              // The field prop is used to connect the input field to the form context provided by the useForm hook.
              render={({ field }) => <DateInput key="eventDate" {...field} />}
            />
            {errors.eventDate && <p>Event date is required</p>}

            <label>Starttid for aktiviteten</label>
            <select
              {...register("activityStartTime", {
                required: "Start time is required",
              })}
            >
              <option value="">Select start time</option>{" "}
              {/* Default/placeholder option */}
              {makeTimeOptions()}
            </select>
            {errors.activityStartTime && (
              <p>{errors.activityStartTime.message}</p>
            )}

            <label>Evt. kommentar til booking</label>
            <textarea {...register("comment")} />
          </div>
        )}

        <button type="submit" className="button-27">
          Book
        </button>
      </form>
    </div>
  );
}

export default App;
