import { useForm } from "react-hook-form";
import {
  ActivityDto,
  ReservationActivityDto,
  ReservationDto,
} from "../../types";
import { useEffect, useState } from "react";
import { getActivities } from "../../services/api/reservationAPI";
import ActivityCard from "./activityCard";

export default function ReservationForm() {
  const [customerType, setCustomerType] = useState("private");
  const [reservedActivities, setReservedActivities] = useState<
    ReservationActivityDto[]
  >([]);
  const [activities, setActivities] = useState<ActivityDto[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationDto>({
    defaultValues: {
      reservationDate: selectedDate,
      created: new Date().toISOString(),
    },
  });

  // set the activities
  useEffect(() => {
    getActivities().then((data) => setActivities(data));
    getTodayDate();
  }, []);

  const onSubmit = (data: ReservationDto) => {
    console.log(data);
    // create ReservationDto
    const reservation: ReservationDto = {
      ...data,
      reservedActivities: reservedActivities,
    };
    // set guest or company to null if not needed
    if (customerType === "private") {
      reservation.company = null;
    } else {
      reservation.guest = null;
    }
    console.log(reservation);
  };

  //get today's date to be used as min date in the date input field
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleActivityReservation = (
    reservationActivity: ReservationActivityDto
  ) => {
    setReservedActivities([...reservedActivities, reservationActivity]);
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* radio buttons for customer type */}
        <div className="flex justify-center items-center">
          <label className="flex justify-center items-center input input-bordered gap-2 w-custom">
            {/* ----------------radio button for private---------------- */}
            <input
              type="radio"
              className="radio"
              value="private"
              checked={customerType === "private"}
              onChange={() => setCustomerType("private")}
            />
            Privat
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle mr-14"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            {/* ----------------radio button for business---------------- */}
            <input
              type="radio"
              className="radio"
              value="business"
              checked={customerType === "business"}
              onChange={() => setCustomerType("business")}
            />
            Erhverv
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-building-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
            </svg>
          </label>
        </div>

        {/* --------------------- default input fields --------------------- */}
        {/* Reservation date input field */}
        <div className="mx-96">
          <div className="flex justify-center items-center mt-10">
            <label
              className={`input input-bordered flex justify-center items-center gap-2 w-custom ${
                errors.reservationDate ? "input-error" : ""
              }`}
            >
              Dato:
              <input
                type="date"
                className="grow"
                min={getTodayDate()}
                // we use the register function to register the input fields
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="flex justify-center items-center mt-4">
            <label
              className={`input input-bordered flex items-center gap-2 w-custom ${
                errors.numberOfParticipants ? "input-error" : ""
              }`}
            >
              Antal personer:
              <input
                type="number"
                className="grow"
                // we use the register function to register the input fields
                {...register("numberOfParticipants", { required: true })}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-arms-up"
                viewBox="0 0 16 16"
              >
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
              </svg>
            </label>
          </div>
        </div>

        {/* company fields */}
        {customerType === "business" && (
          <div>
            <label
              className={`input input-bordered flex items-center gap-2 w-custom ${
                errors.company?.companyName ? "input-error" : ""
              }`}
            >
              Firmanavn:
              <input
                type="text"
                className="grow"
                // we use the register function to register the input fields
                {...register("company.companyName", { required: true })}
              />
            </label>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-custom ${
                  errors.company?.cvr ? "input-error" : ""
                }`}
              >
                CVR:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("company.cvr", { required: true })}
                />
              </label>
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-custom ${
                  errors.company?.contactFirstName ? "input-error" : ""
                }`}
              >
                Fornavn på kontaktperson:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("company.contactFirstName", { required: true })}
                />
              </label>
            </div>

            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-custom ${
                  errors.company?.contactLastName ? "input-error" : ""
                }`}
              >
                Efternavn på kontaktperson:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("company.contactLastName", { required: true })}
                />
              </label>
            </div>

            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-custom ${
                  errors.company?.contactEmail ? "input-error" : ""
                }`}
              >
                Email til kontaktperson:
                <input
                  type="email"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("company.contactEmail", {
                    required: true,
                    // we use the pattern attribute to validate the email
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </label>
            </div>
          </div>
        )}

        {/* // private fields */}
        {customerType === "private" && (
          <div className="mx-72 mt-8">
            <h2 className="flex justify-center mb-2 text-2xl">
              Kontakt informationer
            </h2>
            <div className="flex justify-center items-center">
              <label
                className={`input input-bordered flex items-center gap-2 w-custom mt-4 ${
                  errors.guest?.firstName ? "input-error" : ""
                }`}
              >
                Fornavn:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("guest.firstName", { required: true })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-vcard-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg>
              </label>
            </div>

            <div className="flex justify-center items-center">
              <label
                className={`input input-bordered flex items-center gap-2 w-custom mt-4 ${
                  errors.guest?.lastName ? "input-error" : ""
                }`}
              >
                Efternavn:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("guest.lastName", { required: true })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-vcard-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg>
              </label>
            </div>

            <div className="flex justify-center items-center">
              <label
                className={`input input-bordered flex items-center gap-2 w-custom mt-4 ${
                  errors.guest?.email ? "input-error" : ""
                }`}
              >
                Email:
                <input
                  type="email"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("guest.email", {
                    required: true,
                    // we use the pattern attribute to validate the email
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />{" "}
                </svg>
              </label>
            </div>
          </div>
        )}

        {/* CONTAINER for activities */}
        <div>
          {selectedDate && (
            <div className="grid grid-cols-3 gap-10">
              {activities.map((activity) => (
                <ActivityCard
                  onReserveActivity={handleActivityReservation}
                  key={activity.id}
                  activity={activity}
                  date={selectedDate}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center items-center mt-5">
          <button type="submit" className="btn btn-primary">
            Send Booking
          </button>
        </div>
        {errors.reservationTime && (
          <span>{errors.reservationTime.message}</span>
        )}
      </form>
    </div>
  );
}
