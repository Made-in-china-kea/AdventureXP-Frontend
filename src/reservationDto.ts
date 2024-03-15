import { useForm } from "react-hook-form"; // Assuming you have react-hook-form imported
import { ReservationDto } from "./types";

export function CreateReservationDtoFromForm(
  form: ReservationDto
): ReservationDto {
  const {
    guest,
    company,
    reservationDate,
    reservationTime,
    numberOfParticipants,
    reservedActivities,
    isCancelled,
  } = useForm<ReservationDto>({
    defaultValues: {
      guest: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      },
      company: {
        companyName: "",
        contactFirstName: "",
        contactLastName: "",
        contactEmail: "",
        cvr: undefined, // Optional CVR number
      },
      reservationDate: new Date(),
      reservationTime: 0,
      numberOfParticipants: 1,
      reservedActivities: [],
      isCancelled: false,
    },
  })(form);

  const created = reservationDate.toISOString();

  // Validate form data (optional)
  // You can add validation logic here using yup or other validation libraries

  return {
    guest,
    company,
    reservationDate,
    reservationTime,
    numberOfParticipants,
    created,
    reservedActivities,
    isCancelled,
  };
}
