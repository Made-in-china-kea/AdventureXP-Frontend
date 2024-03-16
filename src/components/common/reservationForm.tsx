import { useForm } from "react-hook-form";
import { ActivityDto, ReservationDto } from "../../types";
import { useEffect, useState } from "react";
import {
  getActivities,
  getAvailableSlots,
} from "../../services/api/reservationAPI";

export default function ReservationForm() {
  const [customerType, setCustomerType] = useState("private");
  const [selectedActivity, setSelectedActivity] = useState<ActivityDto>();
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

  // set the available slots
  useEffect(() => {
    if (selectedActivity && selectedDate) {
      getAvailableSlots(selectedActivity.id, selectedDate).then((data) =>
        console.log(data)
      );
    }
  }, [selectedActivity, selectedDate]);
  // set the activities
  useEffect(() => {
    getActivities().then((data) => setActivities(data));
  }, []);
  const timeOptions: JSX.Element[] = [];

  const onSubmit = (data: ReservationDto) => {
    console.log(data);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {/* // default fields */}
        <div>
          <label
            className={`input input-bordered flex items-center gap-2 w-96 ${
              errors.reservationDate ? "input-error" : ""
            }`}>
            Dato:
            <input
              type="date"
              className="grow"
              // we use the register function to register the input fields
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label
            className={`input input-bordered flex items-center gap-2 w-96 ${
              errors.reservationTime ? "input-error" : ""
            }`}>
            Ledige starttider:
            <select
              className="grow"
              // we use the register function to register the input fields
              {...register("reservationTime", { required: true })}>
              <option value="default">Vælg starttid</option>
              {makeTimeOptions()}
            </select>
          </label>
        </div>
        <div>
          <label
            className={`input input-bordered flex items-center gap-2 w-96 ${
              errors.numberOfParticipants ? "input-error" : ""
            }`}>
            Antal deltagere:
            <input
              type="number"
              className="grow"
              // we use the register function to register the input fields
              {...register("numberOfParticipants", { required: true })}
            />
          </label>
        </div>
        <div>
          <label
            className={`input input-bordered flex items-center gap-2 w-96 ${
              errors.reservedActivities ? "input-error" : ""
            }`}>
            Aktivitet:
            <select
              className="grow"
              // we use the register function to register the input fields
              {...register("reservedActivities", { required: true })}
              onChange={(e) => {
                const activity = activities.find(
                  (a) => a.id === parseInt(e.target.value)
                );
                if (activity) {
                  setSelectedActivity(activity);
                }
              }}>
              <option value="default">Vælg aktivitet</option>
              {activities.map((activity) => (
                <option value={activity.id}>{activity.name}</option>
              ))}
            </select>
          </label>
        </div>
        {/* // company fields */}
        {customerType === "business" && (
          <div>
            <label
              className={`input input-bordered flex items-center gap-2 w-96 ${
                errors.company?.companyName ? "input-error" : ""
              }`}>
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
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.company?.cvr ? "input-error" : ""
                }`}>
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
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.company?.contactFirstName ? "input-error" : ""
                }`}>
                Kontakt fornavn:
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
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.company?.contactLastName ? "input-error" : ""
                }`}>
                Kontakt efternavn:
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
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.company?.contactEmail ? "input-error" : ""
                }`}>
                Kontakt email:
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
          <div>
            <label
              className={`input input-bordered flex items-center gap-2 w-96 ${
                errors.guest?.firstName ? "input-error" : ""
              }`}>
              Fornavn:
              <input
                type="text"
                className="grow"
                // we use the register function to register the input fields
                {...register("guest.firstName", { required: true })}
              />
            </label>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.guest?.lastName ? "input-error" : ""
                }`}>
                Efternavn:
                <input
                  type="text"
                  className="grow"
                  // we use the register function to register the input fields
                  {...register("guest.lastName", { required: true })}
                />
              </label>
            </div>
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 w-96 ${
                  errors.guest?.email ? "input-error" : ""
                }`}>
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
              </label>
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
