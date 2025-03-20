// Input.tsx
import React from "react";

interface InputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="mt-1 block w-full h-12 rounded-md shadow-sm sm:text-sm border border-gray-300 p-2"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;