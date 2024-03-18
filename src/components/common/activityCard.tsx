import { useEffect, useState } from "react";
import { ActivityDto } from "../../types";
import { getAvailableSlots } from "../../services/api/reservationAPI.tsx";

interface ActivityCardProps {
  activity: ActivityDto;
  date: string;
  onTimeChange: (time: number) => void;
}

export default function ActivityCard({
  activity,
  date,
  onTimeChange,
}: ActivityCardProps) {
  const [availableTimes, setAvailableTimes] = useState<number[]>([]);
  // set the available slots
  useEffect(() => {
    if (date) {
      getAvailableSlots(activity.id, date).then((data) =>
        setAvailableTimes(data)
      );
    }
  }, [activity, date]);

  interface TimeOption {
    value: number;
    label: string;
  }

  const handleTimeChange = (event) => {
    console.log(event.target.value);
    onTimeChange(event.target.value); // Call parent's callback with selected time
  };

  function makeTimeOptions(): TimeOption[] {
    const timeOptions: TimeOption[] = [];

    for (const time of availableTimes) {
      const formattedTime = time.toString().padStart(4, "0"); // Ensure 4-digit format
      const displayedTime = `${formattedTime
        .toString()
        .slice(0, 2)}:${formattedTime.toString().slice(2)}`;
      timeOptions.push({ value: time, label: `kl. ${displayedTime}` });
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
        <label className={`input input-bordered flex items-center gap-2 w-96 `}>
          Ledige starttider:
          {makeTimeOptions().map((option) => (
            <input
              type="text"
              name="selectedTime"
              value={option.value}
              onClick={handleTimeChange}
            >
              {option.label}
            </input>
          ))}
        </label>
      </div>
    </div>
  );
}
