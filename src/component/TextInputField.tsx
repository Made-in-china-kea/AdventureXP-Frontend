import React from "react";

// The props of the component
interface InputFieldProps {
  label: string;
  placeholder: string;
}

// This component is a text input field
// React.FC is a type that takes a props type parameter.
// Here React.FC is checkking InputFieldProps
const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
