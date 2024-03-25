import { useEffect, useState } from 'react'
import { ActivityDto, ReservationActivityDto } from '../../types.ts'
import { getAvailableSlots } from '../../services/api/reservationAPI.tsx'

interface ActivityCardProps {
  activity: ActivityDto
  date: string
  timeSlotsUsed: number[]
  formatTime: (time: number) => string
  onReserveActivity: (reservationActivity: ReservationActivityDto) => void
}

export default function ActivityCard({
  activity,
  date,
  timeSlotsUsed,
  formatTime,
  onReserveActivity,
}: ActivityCardProps) {
  // activity card image
  const image = `src/assets/Images/activities/${activity.name}.jpg`
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [availableSlots, setAvailableSlots] = useState<number[]>([])
  const [reservedSlots, setReservedSlots] = useState<number>(1)
  const [startTime, setStartTime] = useState<number>(1)
  // set the available slots
  useEffect(() => {
    if (date) {
      getAvailableSlots(activity.id, date)
        .then((data) => data.filter((slot) => !timeSlotsUsed.includes(slot)))
        .then((data) => setAvailableSlots(data))
    }
  }, [activity, date, timeSlotsUsed])

  const reserveActivity = () => {
    // create a reservationActivity object with the selected activity, date, start time and reserved slots
    const reservationActivity: ReservationActivityDto = {
      reservation: null,
      activity: activity,
      startTime: startTime,
      reservedSlots: reservedSlots,
    }
    onReserveActivity(reservationActivity) // Call parent's callback with reservationActivity
  }

  return (
    <div className="card w-96 bg-custom-bg-colour shadow-xl mt-10">
      {(image && (
        <figure>
          <img src={image} alt="" />
        </figure>
      )) || ( // If no image, display a placeholder
        <div className="placeholder w-96 h-48 bg-gray-400"></div>
      )}

      <div className="card-body text-custom-txt-colour">
        <h2 className="card-title text-2xl">
          {activity.name.toLocaleUpperCase()}
        </h2>
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
      <div className=" h-60 overflow-auto rounded-md">
        <label>
          <div className="grid grid-cols-subgrid">
            <div className="sticky top-0 left-0 right-0 bg-amber-500 text-black">
              <p className="text-center font-bold">Ledige starttider</p>
            </div>
            {availableSlots.map((slot) => (
              <button
                value={slot}
                key={slot}
                className="btn"
                onClick={() => {
                  setStartTime(slot)
                  setIsModalOpen(true)
                }}
              >
                {formatTime(slot)}
              </button>
            ))}
          </div>
        </label>
      </div>

      {/* modal to get number of reserved slots wanted from the user */}
      {isModalOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <p>
              Hvor mange tider af{' '}
              {activity.timeSlot / 100 <= 1
                ? `${activity.timeSlot / 100} times`
                : `${activity.timeSlot / 100} timers`}{' '}
              varighed vil du reservere?
            </p>
            <input
              type="number"
              id="slots"
              name="slots"
              min="1"
              max="10"
              value={reservedSlots}
              required
              onChange={(event) => setReservedSlots(Number(event.target.value))}
            />
            <button
              className="btn"
              onClick={(event) => {
                event.preventDefault()
                reserveActivity()
                setIsModalOpen(false)
              }}
            >
              Reserver
            </button>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </dialog>
      )}
    </div>
  )
}
