import type { SelectHTMLAttributes } from 'react';

export interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export function Select({ options, className = '', ...rest }: SelectProps) {
  return (
    <select
      className={`w-full font-pixel text-xs uppercase bg-black text-pellet border-2 border-pellet px-2 py-2 min-h-[44px] appearance-none ${className}`}
      {...rest}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
