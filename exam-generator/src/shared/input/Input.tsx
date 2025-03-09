import React, { useId } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

function Input({ label, className = '', ...props }: TextInputProps) {
  const inputId = useId();
  return (
    <div className='my-1'>
      {label && (
        <label
          htmlFor={inputId}
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type='text'
        {...props}
        className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      />
    </div>
  );
}

export default Input;
