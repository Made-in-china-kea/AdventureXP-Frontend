import "./App.css";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DateInput from "./components/common/DateInputField";

function App() {
  const [customerType, setCustomerType] = useState("private");

  const timeOptions: JSX.Element[] = [];
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
      activityStartTime: "default",
      comment: null,
      companyName: null,
      cvr: null,
      customerType: customerType,
    },
  });

  function makeTimeOptions() {
    // we make a loop to create the time options
    // from 08:00 to 22:00
    for (let i = 8; i < 23; i++) {
      // we format the time to be like 08:00
      // this is just for the user to see
      const formatTime = `${i < 10 ? "0" : ""}${i}:00`;
      // we reformat the time to be like 0800
      // this is just for the backend to use
      const formatTimeToNumber = parseInt(formatTime.replace(":", ""));
      // we push the time options to the timeOptions array
      timeOptions.push(
        <option value={formatTimeToNumber}>kl. {formatTime}</option>
      );
    }
    return timeOptions;
  }

  return (
    <div>
      <h1>AdventureXP - Booking</h1>

      <div className="mb-3">
        {/* ----------------radio button for private---------------- */}
        <label className="input input-bordered flex items-center gap-2 ">
          <input
            type="radio"
            className="radio"
            value="private"
            checked={customerType === "private"}
            onChange={() => setCustomerType("private")}
          />
          Privat
          {/* ----------------radio button for business---------------- */}
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
          // for now we just console.log the form data
          console.log(data);
        })}
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
                  // we use the register function to register the input fields
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
                  // we use the register function to register the input fields
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
              {/* The Controller component is designed to handle the registration of the input field for you.*/}
              {/* It's specifically built to work with custom input components that don't expose a standard interface for forms, such as ref and onChange.*/}
              <Controller
                // This prop is used to define the name of the input field which also represents the key in the form data.
                name="activity"
                // This prop is used to connect the Controller to the form provided by the useForm hook.
                control={control}
                // This prop is used to define the rules for the input field.
                rules={{ required: true }}
                // This prop is used to render the select input field.
                render={({ field }) => (
                  <select
                    {...field}
                    className={`input input-bordered flex items-center gap-2 w-96 ${
                      errors.email ? "input-error" : ""
                    }`}
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
                {/* The Controller component is designed to handle the registration of the input field for you.*/}
                {/* It's specifically built to work with custom input components that don't expose a standard interface for forms, such as ref and onChange.*/}
                <Controller
                  // This prop is used to define the name of the input field which also represents the key in the form data.
                  name="eventDate"
                  // This prop is used to connect the Controller to the form provided by the useForm hook.
                  control={control}
                  // This prop is used to define the rules for the input field.
                  rules={{ required: true }}
                  // This prop is used to render the input field from my DateInput component.
                  render={({ field }) => (
                    <DateInput key="eventDate" {...field} />
                  )}
                />
              </label>
            </div>

            <div>
              {/* The Controller component is a wrapper component that connects components  (like my DateInput component) with React Hook Form. */}
              <Controller
                // This prop is used to define the name of the input field which also represents the key in the form data.
                name="activityStartTime"
                // This prop is used to connect the Controller to the form provided by the useForm hook.
                control={control}
                // This prop is used to define the rules for the input field.
                rules={{ required: true }}
                // This prop is used to render the select input field.
                render={({ field }) => (
                  <select
                    {...field}
                    className={`input input-bordered flex items-center gap-2 w-96 ${
                      errors.email ? "input-error" : ""
                    }`}
                  >
                    <option disabled value="default">
                      Vælg en start tid
                    </option>{" "}
                    {makeTimeOptions()}
                  </select>
                )}
              />
            </div>

            <div>
              {/*This is a empty div it is just a spacer for the grid*/}
              {/*It can be used if we later on want a logo or a picture here*/}
            </div>

            <div>
              {/*Text area input for additional comments for the user*/}
              <textarea
                className="textarea textarea-bordered w-96 h-40"
                placeholder="Evt. kommentar til booking"
                // we use the register function to register the input fields
                {...register("comment")}
              ></textarea>
            </div>
          </div>
        )}

        {customerType === "business" && (
          <div className="input-grid">
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.companyName ? "input-error" : ""
                }`}
              >
                Firmanavn:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("companyName", { required: true })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-building"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                </svg>
              </label>
            </div>

            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.cvr ? "input-error" : ""
                }`}
              >
                CVR:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("cvr", { required: true })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-building"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                </svg>
              </label>
            </div>

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
                  // we use the register function to register the input fields
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
                  // we use the register function to register the input fields
                  {...register("email", {
                    required: true,
                    // we use the pattern attribute to validate the email
                    pattern: /^\S+@\S+$/i,
                  })}
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
              {/* The Controller component is designed to handle the registration of the input field for you.*/}
              {/* It's specifically built to work with custom input components that don't expose a standard interface for forms, such as ref and onChange.*/}{" "}
              <Controller
                // This prop is used to define the name of the input field which also represents the key in the form data.
                name="activity"
                // This prop is used to connect the Controller to the form provided by the useForm hook.
                control={control}
                // This prop is used to define the rules for the input field.
                rules={{ required: true }}
                // This prop is used to render the select input field.
                render={({ field }) => (
                  <select
                    {...field}
                    className={`input input-bordered flex items-center gap-2 w-96 ${
                      errors.email ? "input-error" : ""
                    }`}
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
                {/* The Controller component is designed to handle the registration of the input field for you.*/}
                {/* It's specifically built to work with custom input components that don't expose a standard interface for forms, such as ref and onChange.*/}{" "}
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
              <Controller
                name="activityStartTime"
                // This prop is used to connect the Controller to the form context provided by the useForm hook.
                control={control}
                // This prop is used to define the rules for the input field.
                rules={{ required: true }}
                // This prop is used to render the select input field.
                render={({ field }) => (
                  <select
                    {...field}
                    className={`input input-bordered flex items-center gap-2 w-96 ${
                      errors.email ? "input-error" : ""
                    }`}
                  >
                    <option disabled value="default">
                      Vælg en start tid
                    </option>{" "}
                    {makeTimeOptions()}
                  </select>
                )}
              />
            </div>

            <div>
              {/*This is a empty div it is just a spacer for the grid*/}
              {/*It can be used if we later on want a logo or a picture here*/}{" "}
            </div>

            <div>
              {/*Text area input for additional comments for the user*/}

              <textarea
                className="textarea textarea-bordered w-96 h-40"
                placeholder="Evt. kommentar til booking"
                // we use the register function to register the input fields
                {...register("comment")}
              ></textarea>
            </div>
          </div>
        )}

        <button type="submit" className="button-27">
          Send Booking
        </button>
      </form>
    </div>
  );
}

export default App;
