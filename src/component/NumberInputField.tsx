import React, { useState } from "react";

interface NumberInputFieldProps {
    label: string;
    max?: number;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({ label, max }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (max && /^\d{0,8}$/.test(newValue)) {
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
