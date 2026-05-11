import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';

const styles: Record<Variant, string> = {
  primary: 'bg-pellet text-black',
  secondary: 'bg-secondary text-black',
  danger: 'bg-danger text-white',
  ghost: 'bg-transparent text-pellet border-pellet',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`pixel-btn ${styles[variant]} ${className}`}
      {...rest}
    />
  );
}
