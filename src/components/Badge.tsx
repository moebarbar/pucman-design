import type { ReactNode } from 'react';

type Tone = 'success' | 'warning' | 'danger' | 'info';

const tones: Record<Tone, string> = {
  success: 'bg-success text-white',
  warning: 'bg-warning text-black',
  danger: 'bg-danger text-white',
  info: 'bg-info text-black',
};

export function Badge({
  tone = 'info',
  children,
}: {
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-block font-pixel text-[10px] uppercase px-2 py-1 border-2 border-black ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
