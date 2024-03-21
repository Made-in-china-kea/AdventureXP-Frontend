import { useEffect, useState } from 'react'
import { ActivityDto, ReservationActivityDto } from '../../types'
import { getAvailableSlots } from '../../services/api/reservationAPI.tsx'

interface TimeOption {
  value: number
  label: string
}
interface ActivityCardProps {
  activity: ActivityDto
  date: string
  onReserveActivity: (reservationActivity: ReservationActivityDto) => void
}

export default function ActivityCard({
  activity,
  date,
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
      getAvailableSlots(activity.id, date).then((data) =>
        setAvailableSlots(data),
      )
    }
  }, [activity, date])

  const reserveTimeSlot = () => {
    // create a reservationActivity object with the selected activity, date, start time and reserved slots
    const reservationActivity: ReservationActivityDto = {
      activity: activity,
      startTime: startTime,
      reservedSlots: reservedSlots,
      created: new Date().toISOString(),
    }
    console.log(reservationActivity)

    onReserveActivity(reservationActivity) // Call parent's callback with reservationActivity
  }

  function makeTimeOptions(): TimeOption[] {
    const timeOptions: TimeOption[] = []

    for (const time of availableSlots) {
      const formattedTime = time.toString().padStart(4, '0') // Ensure 4-digit format
      const displayedTime = `${formattedTime
        .toString()
        .slice(0, 2)}:${formattedTime.toString().slice(2)}`
      timeOptions.push({ value: time, label: `kl. ${displayedTime}` })
    }
    return timeOptions
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
        <h2 className="card-title text-2xl">{activity.name.toLocaleUpperCase()}</h2>
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
            {makeTimeOptions().map((option) => (
              <div className='mt-4 text-custom-txt-colour text-center'>
              <button
                value={option.value}
                onClick={() => {
                  setStartTime(option.value)
                  setIsModalOpen(true)
                }}
                >
                {option.label}
              </button>
                </div>
            ))}
          </div>
        </label>
      </div>

      {/* modal to get number of reserved slots wanted from the user */}
      {isModalOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <p>
              Hvor mange pladser af{' '}
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
                reserveTimeSlot()
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
