import type { InputHTMLAttributes } from 'react';

export function Input({
  className = '',
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className={`w-full font-pixel text-xs uppercase bg-black text-pellet border-2 border-pellet px-2 py-2 placeholder:text-secondary ${className}`}
      {...rest}
    />
  );
}
