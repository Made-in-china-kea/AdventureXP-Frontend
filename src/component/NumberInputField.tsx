import React, { useState } from "react";

// The props of the component
interface NumberInputFieldProps {
    label: string;
    max?: number;
}

// This component is a number input field
// React.FC is a type that takes a props type parameter.
// Here React.FC is checkking NumberInputFieldProps
const NumberInputField: React.FC<NumberInputFieldProps> = ({ label, max }) => {
    // The state of the number input field is a string
    const [value, setValue] = useState<string>("");
    // This is because max attribute of input does not work if the type is number

    // Handle the change of the number input field
    // This function will be called when the user types in the number input field
    // React.ChangeEvent<HTMLInputElement> is a generic type that is used to define the type of argument that will be passed to the function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set the state of the number input field to the value that the user has typed in
    const newValue = event.target.value;
    // If max is set and the new value is a number with a maximum length
    // max && /^\d{0,8}$/ is a regular expression that checks if the new value is a number with a maximum length of 8
    if (max && /^\d{0,8}$/.test(newValue)) {
        // Set the state of the number input field to the new value
      setValue(newValue);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        max={max}
      />
    </div>
  );
};

export default NumberInputField;
