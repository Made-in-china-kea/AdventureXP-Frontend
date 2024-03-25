import { ReservationActivityDto } from '../../types'

interface ActivityTimelineProps {
  activity: ReservationActivityDto
  index: number
  deleteActivity: (index: number) => void
  formatTime: (time: number) => string
}

export default function ActivityTimelineCard({
  activity,
  index,
  deleteActivity,
  formatTime,
}: ActivityTimelineProps) {
  return (
    <div
      key={index}
      className="card w-96 bg-base-100 shadow-xl mx-auto justify-center"
    >
      <div className="card-body">
        <h2 className="card-title">{activity.activity.name}</h2>
        <p>
          Starttid: {formatTime(activity.startTime)} Sluttid:{' '}
          {formatTime(
            activity.startTime +
              activity.reservedSlots * activity.activity.timeSlot,
          )}
        </p>
        <p>Antal reserverede tider: {activity.reservedSlots}</p>

        <p>
          Varighed ialt:{' '}
          {(activity.reservedSlots * activity.activity.timeSlot) / 100} timer
        </p>

        <div className="card-actions justify-center">
          <button
            onClick={() => deleteActivity(index)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
