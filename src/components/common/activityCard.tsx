import { useEffect, useState } from "react";
import { ActivityDto, ReservationActivityDto } from "../../types";
import { getAvailableSlots } from "../../services/api/reservationAPI.tsx";

interface ActivityCardProps {
  activity: ActivityDto;
  date: string;
  onReserveActivity: (reservationActivity: ReservationActivityDto) => void;
}

export default function ActivityCard({
  activity,
  date,
  onReserveActivity,
}: ActivityCardProps) {
  const [availableSlots, setAvailableSlots] = useState<number[]>([]);

  // set the available slots
  useEffect(() => {
    if (date) {
      getAvailableSlots(activity.id, date).then((data) =>
        setAvailableSlots(data)
      );
    }
  }, [activity, date]);

  interface TimeOption {
    value: number;
    label: string;
  }
  // activity card image
  const image = `../public/Images/activities/${activity.name}.jpg`;

  const handleTimeChange = (event) => {
    // create ReservationActivityDto
    const reservationActivity: ReservationActivityDto = {
      activity: activity,
      startTime: event.target.value,
      reservedSlots: 1,
      created: new Date().toISOString(),
    };

    onReserveActivity(reservationActivity); // Call parent's callback with reservationActivity
  };

  function makeTimeOptions(): TimeOption[] {
    const timeOptions: TimeOption[] = [];

    for (const time of availableSlots) {
      const formattedTime = time.toString().padStart(4, "0"); // Ensure 4-digit format
      const displayedTime = `${formattedTime
        .toString()
        .slice(0, 2)}:${formattedTime.toString().slice(2)}`;
      timeOptions.push({ value: time, label: `kl. ${displayedTime}` });
    }
    return timeOptions;
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-10">
      {(image && (
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
      )) || ( // If no image, display a placeholder
        <div className="placeholder w-96 h-48 bg-gray-400"></div>
      )}

      <div className="card-body">
        <h2 className="card-title">{activity.name.toLocaleUpperCase()}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            Aldersbegræsning: {activity.ageLimit}
          </div>
          <div className="badge badge-outline">Pris: {activity.price} kr</div>
          <div className="badge badge-outline">
            Varighed: {activity.timeSlot / 100} time
          </div>
        </div>
      </div>

      {/* activity card with available slots nested in each div so that we can display all activities with available slots under */}
      <div>
        <label className={`input input-bordered flex items-center gap-2 w-96 `}>
          Ledige starttider:
          {makeTimeOptions().map((option) => (
            <button value={option.value} onClick={handleTimeChange}>
              {option.label}
            </button>
          ))}
        </label>
      </div>
    </div>
  );
}
