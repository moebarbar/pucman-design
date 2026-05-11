const ghosts = [
  { name: 'Blinky', color: '#FF0000' },
  { name: 'Pinky', color: '#FFB8FF' },
  { name: 'Inky', color: '#00FFFF' },
  { name: 'Clyde', color: '#FFB852' },
];

export function GhostRow() {
  return (
    <div className="flex gap-3" role="list">
      {ghosts.map((g) => (
        <div
          key={g.name}
          role="listitem"
          className="flex flex-col items-center gap-1"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" aria-label={g.name}>
            <path
              d="M4 20 a16 16 0 0 1 32 0 v16 l-4 -4 l-4 4 l-4 -4 l-4 4 l-4 -4 l-4 4 l-4 -4 z"
              fill={g.color}
            />
            <circle cx="14" cy="18" r="3" fill="#FFFFFF" />
            <circle cx="26" cy="18" r="3" fill="#FFFFFF" />
            <circle cx="14" cy="18" r="1.5" fill="#2A3FE5" />
            <circle cx="26" cy="18" r="1.5" fill="#2A3FE5" />
          </svg>
          <span className="font-pixel text-[8px] uppercase">{g.name}</span>
        </div>
      ))}
    </div>
  );
}
