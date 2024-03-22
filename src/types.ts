export type ReservationDto = {
  id: number | null // Optional for new reservations
  guest: GuestDto | null
  company: CompanyDto | null
  reservationDate: Date
  numberOfParticipants: number
  reservedActivities: ReservationActivityDto[]
  isCancelled: boolean
}

export type GuestDto = {
  id: number | null // Optional for new guests
  firstName: string
  lastName: string
  phoneNumber?: string // Optional phone number
  email: string
}

export type CompanyDto = {
  id: number | null // Optional for new companies
  companyName: string
  contactFirstName: string
  contactLastName: string
  contactEmail: string
  cvr: number // Optional CVR number
}

export type ReservationActivityDto = {
  reservation: ReservationDto | null // Optional for new activities
  activity: ActivityDto // Reference to Activity (assuming separate ActivityDto)
  startTime: number
  reservedSlots: number
}

export type ActivityDto = {
  id: number // Activity ID is a required identifier
  name: string
  price: number
  ageLimit: number
  timeSlot: number // Assuming timeSlot represents duration in minutes or hours
}
