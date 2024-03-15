import "./App.css";

//-------------Dependencies-------------//
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
//import { addRecipe } from "./services/apiFacade";

//-------------Components-------------//
import PrivateBookingForm from "./components/common/PrivateBookingForm";
import BusinessBookingForm from "./components/common/BusinessBookingForm";

function App() {
  const [customerType, setCustomerType] = useState("private");

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
  const { handleSubmit, reset } = methods;

  return (
    <div>
      <h1>AdventureXP - Booking</h1>

      <FormProvider {...methods}>
        <form
          // we use the handleSubmit function to handle the form submission
          onSubmit={handleSubmit(async (data) => {
            /*
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
                  } catch (error) {
                    console.log("Failed to add booking", error);
                  }
            */
            console.log(data);
            reset();
          })}
        >
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

          {customerType === "private" && <PrivateBookingForm />}
          {customerType === "business" && <BusinessBookingForm />}

          <button type="submit" className="button-27">
            Send Booking
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
