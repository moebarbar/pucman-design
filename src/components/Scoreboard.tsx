export interface ScoreRow {
  rank: number;
  initials: string;
  score: number;
  level: number;
}

const rows: ScoreRow[] = [
  { rank: 1, initials: 'MAB', score: 999990, level: 21 },
  { rank: 2, initials: 'PAC', score: 824100, level: 18 },
  { rank: 3, initials: 'BLY', score: 612440, level: 14 },
  { rank: 4, initials: 'INK', score: 503210, level: 12 },
  { rank: 5, initials: 'CLY', score: 277680, level: 9 },
];

export function Scoreboard() {
  return (
    <table
      className="w-full border-2 border-pellet bg-black"
      role="table"
      aria-label="High scores"
    >
      <thead>
        <tr className="border-b-2 border-dashed border-pellet">
          {['Rank', 'Player', 'Score', 'Level'].map((h) => (
            <th
              key={h}
              scope="col"
              className="font-pixel text-[10px] uppercase text-pellet px-2 py-2 text-left"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr
            key={r.rank}
            className={i % 2 === 0 ? 'bg-black' : 'bg-ink/60'}
          >
            <td className="font-pixel text-xs text-pellet px-2 py-2">
              {r.rank.toString().padStart(2, '0')}
            </td>
            <td className="font-pixel text-xs text-white px-2 py-2">
              {r.initials}
            </td>
            <td className="font-mono text-sm text-white px-2 py-2 tabular-nums">
              {r.score.toLocaleString()}
            </td>
            <td className="font-mono text-sm text-secondary px-2 py-2">
              {r.level}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
