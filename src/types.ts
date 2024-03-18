export type ReservationDto = {
  id?: number; // Optional for new reservations
  guest?: GuestDto;
  company?: CompanyDto;
  reservationDate: string; // Date string in ISO format
  reservationTime: number;
  numberOfParticipants: number;
  created: string; // Date string in ISO format
  edited?: string; // Optional for existing reservations
  reservedActivities: ReservationActivityDto[];
  isCancelled: boolean;
};

export type GuestDto = {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber?: string; // Optional phone number
  email: string;
};

export type CompanyDto = {
  id?: number;
  companyName: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  cvr?: number; // Optional CVR number
};

export type ReservationActivityDto = {
  reservationId?: number; // Optional reference to Reservation
  activity: ActivityDto; // Reference to Activity (assuming separate ActivityDto)
  startTime: number;
  reservedSlots: number;
  created: string; // Date string in ISO format
};

export type ActivityDto = {
  id: number; // Activity ID is a required identifier
  name: string;
  price: number;
  ageLimit: number;
  timeSlot: number; // Assuming timeSlot represents duration in minutes or hours
};
