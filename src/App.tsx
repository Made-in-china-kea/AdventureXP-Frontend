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
      telefon: undefined,
      email: "",
      activity: "",
      eventDate: "",
      activityStartTime: undefined,
      comment: undefined,
      companyName: undefined,
      cvr: undefined,
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
      <h1>Choose customer type</h1>
      {/* ----------------radio button for private---------------- */}
      <label>
        <input
          type="radio"
          value="private"
          checked={customerType === "private"}
          onChange={() => setCustomerType("private")}
        />
        Privat
      </label>
      {/* ----------------radio button for bussiness---------------- */}
      <label>
        <input
          type="radio"
          value="business"
          checked={customerType === "business"}
          onChange={() => setCustomerType("business")}
        />
        Erhverv
      </label>

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
              <label className="input input-bordered flex items-center gap-2">Fornavn: </label>
              <input
                type="text"
                // we use the register function to register the input fields
                {...register("firstName", { required: true })}
              />
            
              {/* we use the errors object to display the error message */}
              {errors.firstName && <p>First name is required</p>}
            </div>

            <div>
              <label>Efternavn: </label>
              <input
                type="text"
                // we use the register function to register the input fields
                {...register("lastName", { required: true })}
              />
              {/* we use the errors object to display the error message */}
              {errors.firstName && <p>Last name is required</p>}
            </div>

            <div>
              <label>Telefon nummer: </label>
              <input
                type="tel"
                maxLength={8}
                {...register("telefon", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
              {errors.telefon && <p>Telefon is required</p>}
            </div>

            <div>
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
              {errors.email && <p>Email is required</p>}
            </div>

            <div>
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
                    <option value="gokart">Go-Kart</option>
                    <option value="paintball">Paintball</option>
                    <option value="biking">Biking</option>
                    <option value="sumo-wrestling">Sumo Wrestling</option>
                    <option value="mini-golf">Mini Golf</option>
                  </select>
                )}
              />
              {errors.activity && <p>En aktivitet is required</p>}
            </div>

            <div>
              <label>Eventdato</label>
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
            </div>

            <div>
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
            </div>

            <div>
              <label>Evt. kommentar til booking</label>
              <textarea {...register("comment")} />
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

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
