export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none min-h-[44px]">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 border-2 border-pellet transition-colors ${
          checked ? 'bg-pellet' : 'bg-black'
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute top-0 bottom-0 w-5 bg-black border-2 border-pellet transition-transform ${
            checked ? 'translate-x-6 bg-surface' : 'translate-x-0'
          }`}
        />
      </button>
      <span className="font-pixel text-[10px] uppercase">{label}</span>
    </label>
  );
}
