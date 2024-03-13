import "./App.css";

import { useForm, Controller } from "react-hook-form";
import DateInput from "./components/common/DateInputField";

function App() {
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
      fullName: "",
      telefon: "",
      email: "",
      activity: "",
      eventDate: "",
      comment: "",
    },
  });

  return (
    <div>
      <h1>This is for private customers</h1>
      <form
        // we use the handleSubmit function to handle the form submission
        onSubmit={handleSubmit((data) => {
          // for now we just alert the form data
          alert(JSON.stringify(data));
        })}
      >
        <label>Fulde navn: </label>
        <input
          type="text"
          // we use the register function to register the input fields
          {...register("fullName", { required: true })}
        />
        {/* we use the errors object to display the error message */}
        {errors.fullName && <p>First name is required</p>}

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
              <option value="gokart">Go-Kart</option>
              <option value="paintball">Paintball</option>
              <option value="biking">Biking</option>
              <option value="sumo-wrestling">Sumo Wrestling</option>
              <option value="mini-golf">Mini Golf</option>
            </select>
          )}
        />

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

        <label>Evt. kommentar til booking</label>
        <textarea {...register("comment")} />

        <input type="submit" />
      </form>

      <h1>This is for business customers</h1>
    </div>
  );
}

export default App;
