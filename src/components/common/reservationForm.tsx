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
  const [selectedStartTime, setSelectedStartTime] = useState<number>();
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
  }, []);

  const onSubmit = (data: ReservationDto) => {
    console.log(data);
  };

  const handleTimeChange = (newTime: number) => {
    setSelectedStartTime(newTime); // Update parent state with selected time
  };

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
        {/* default fields */}
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

        {/* CONTAINER for activity cards */}
        {selectedDate && (
          <div className="flex gap-4">
            {activities.map((activity) => (
              <ActivityCard
                onTimeChange={handleTimeChange}
                key={activity.id}
                activity={activity}
                date={selectedDate.toString()}
              />
            ))}
          </div>
        )}

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
        {/* <div>
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
        </div> */}
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
        {errors.reservationTime && (
          <span>{errors.reservationTime.message}</span>
        )}
      </form>
    </div>
  );
}
