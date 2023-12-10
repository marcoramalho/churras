import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type: 'text' | 'password';
  error?: FieldError;
}

export const Input = forwardRef(function Input ({ label, name, type, error, ...rest }: InputProps, ref) {
  return (
    <div className="mb-5">
      <div className="font-bold mb-2">{label}</div>
      <div>
        <input
          name={name}
          type={type}
          placeholder={label.toLowerCase()}
          className="p-2"
          {...rest}
        />
      </div>
    </div>
  )
})

