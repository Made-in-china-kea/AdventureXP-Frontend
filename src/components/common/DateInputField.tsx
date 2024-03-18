import React from "react";

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DateInputField = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ value, onChange }, ref) => {
    // Get current date
    const currentDate = new Date();
    // Get the year
    const year = currentDate.getFullYear();
    // Get the month
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    // Get the day
    const day = currentDate.getDate().toString().padStart(2, "0");

    // Format to "yyyy-mm-dd"
    const minDate = `${year}-${month}-${day}`;

    // Handle the change of the date input field
    const handleDateChange = (event: { target: { value: string } }) => {
      // Directly pass the value to the onChange prop
      onChange(event.target.value);
    };

    return (
      <div>
        <input
          type="date"
          value={value}
          min={minDate} // Minimum date that can be selected
          onChange={handleDateChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default DateInputField;
