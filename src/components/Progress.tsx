export function Progress({
  value,
  max = 100,
  label,
}: {
  value: number;
  max?: number;
  label: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const blocks = 10;
  const filled = Math.round((pct / 100) * blocks);

  return (
    <div>
      <div className="flex justify-between font-pixel text-[10px] uppercase mb-1">
        <span>{label}</span>
        <span>
          {value}/{max}
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label}
        className="flex gap-[2px] border-2 border-pellet p-[2px] bg-black"
      >
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={`h-3 flex-1 ${i < filled ? 'bg-pellet' : 'bg-black'}`}
          />
        ))}
      </div>
    </div>
  );
}
