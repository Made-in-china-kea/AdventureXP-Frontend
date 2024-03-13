
// The props of the component
interface InputFieldProps {
  label: string;
  placeholder: string;
}

// This component is a text input field
 export default function TextInput({ label, placeholder }: InputFieldProps) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

