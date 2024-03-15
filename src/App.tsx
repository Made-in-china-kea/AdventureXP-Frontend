import "./App.css";

//-------------Dependencies-------------//
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

//-------------Components-------------//
//import { addRecipe } from "./services/apiFacade";
import PrivateBookingForm from "./components/common/PrivateBookingForm";
import BusinessBookingForm from "./components/common/BusinessBookingForm";

function App() {

  // we use the useState hook to create a state and a function to update the state
  // we set the default value of the state to "private"
  const [customerType, setCustomerType] = useState("private");

  // we use the useForm hook to create a form with the default values
  const methods = useForm({
    // we set the default values of the form
    defaultValues: {
      id: null,
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
  // We use the handleSubmit function to handle the form submission
  // and the reset function to reset the form
  // other methods can be added to the methods object
  const { handleSubmit, reset } = methods;

  return (
    <div>
      <h1>AdventureXP - Booking</h1>
      {/*we use the FormProvider to wrap the form and pass the methods*/}
      {/*the methods for now is handleSubmit and reset*/}
      <FormProvider {...methods}>
        <form
          // we use the handleSubmit function to handle the form submission
          onSubmit={handleSubmit(async (data) => {
            /* remove comments to enable the addRecipe function
                  try {
                    const newBooking = {
                    id: null,
                    customerType: data.customerType,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    telefon: null,
                    email: data.email,
                    activity: data.activity,
                    eventDate: data.eventDate,
                    activityStartTime: data.activityStartTime,
                    comment: null,
                    companyName: null,
                    cvr: null,
                    };

                    const response = await addRecipe(newBooking);
                    console.log("New booking added", response);
                    alert("New booking added");
                    reset();
                  } catch (error) {
                    console.log("Failed to add booking", error);
                    alert("Failed to add booking");
                  }
            */
            console.log(data);
            reset();
          })}
        >

          {/* ----------------Radio buttons for swtiching between Private or Business---------------- */}
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

          {/* ----------------Conditional render, so its either Private or Business---------------- */}
          {customerType === "private" && <PrivateBookingForm />}
          {customerType === "business" && <BusinessBookingForm />}

          {/* ----------------Simple submit button---------------- */}
          <button type="submit" className="button-27">
            Send Booking
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
