import React, { useState } from "react";

interface DateInputFieldsProps {
  label: string;
}

// This component is a date input field
// Here, React.FC is a type that takes a props type parameter. This type parameter is used to type check the props of the component.
const DateInputFields: React.FC<DateInputFieldsProps> = ({label}) => {
  // The state of the date input field
  const [selectedDate, setSelectedDate] = useState("");

  // Handle the change of the date input field
  // This function will be called when the user types in the date input field
  // React.ChangeEvent<HTMLInputElement> is a generic type that is used to define the type of argument that will be passed to the function
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set the state of the date input field to the value that the user has typed in
    setSelectedDate(event.target.value);
  };

  // Get current date
  const currentDate = new Date();
  // Get the year
  const year = currentDate.getFullYear();
  // Get the month
  // Add 1 to the month because the month is zero-indexed meaning January is 0, February is 1, etc.
  // Then convert the month to a string
  // padStart is used to ensure that the month is always two digits long and if it is under 10 it will add a 0 in front of it
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  // Get the day
  // Convert the day to a string
  // padStart is used to ensure that the day is always two digits long and if it is under 10 it will add a 0 in front of it
  const day = currentDate.getDate().toString().padStart(2, "0");

  // Format to "yyyy-mm-dd"
  const minDate = `${year}-${month}-${day}`;

  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type="date"
        id="dateInput"
        value={selectedDate}
        onChange={handleDateChange}
        name="date"
        min={minDate} // Minimum date that can be selected
        required
      />
    </div>
  );
};

export default DateInputFields;
