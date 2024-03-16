import { useEffect, useState } from "react";
import { ActivityDto } from "../../types";
import { getAvailableSlots } from "../../services/api/reservationAPI";

export default function ActivityCard(activity: ActivityDto, date: string) {
  const [availableTimes, setAvailableTimes] = useState<number[]>([]);

  // set the available slots
  useEffect(() => {
    if (date) {
      getAvailableSlots(activity.id, date).then((data) => setAvailableTimes(data));
    }
  }, [activity, date]);

  function makeTimeOptions() {
    const timeOptions: JSX.Element[] = [];

    for (const time of availableTimes) {
      const formattedTime = time.toString().padStart(4, "0"); // Ensure 4-digit format
      const displayedTime = `${formattedTime
        .toString()
        .slice(0, 2)}:${formattedTime.toString().slice(2)}`;
      timeOptions.push(<option value="${time}">kl. ${displayedTime}</option>);
    }
    return timeOptions;
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>

      {/* activity card with available slots nested in each div so that we can display all activities with available slots under */}
      <div>
        <label
          className={`input input-bordered flex items-center gap-2 w-96 ${
            errors.reservationTime ? "input-error" : ""
          }`}
        >
          Ledige starttider:
          <select
            className="grow"
            // we use the register function to register the input fields
            {...register("reservationTime", { required: true })}
          >
            <option value="default">Vælg starttid</option>
            {makeTimeOptions()}
          </select>
        </label>
      </div>
    </div>
  );
}
