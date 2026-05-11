import type { ReactNode } from 'react';

type Tone = 'success' | 'warning' | 'danger' | 'info';

const tones: Record<Tone, { bg: string; label: string }> = {
  success: { bg: 'bg-success', label: 'CLEARED' },
  warning: { bg: 'bg-warning', label: 'POWER UP' },
  danger: { bg: 'bg-danger', label: 'GAME OVER' },
  info: { bg: 'bg-info', label: 'READY' },
};

export function Alert({
  tone = 'info',
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}) {
  const t = tones[tone];
  return (
    <div
      role="status"
      className="border-2 border-black shadow-pixel bg-black text-white"
    >
      <div
        className={`${t.bg} font-pixel text-[10px] uppercase px-2 py-1 text-black`}
      >
        {title ?? t.label}
      </div>
      <div className="p-2 text-sm font-mono">{children}</div>
    </div>
  );
}
