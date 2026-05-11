const MAZE = [
  '####################',
  '#........##........#',
  '#.##.###.##.###.##.#',
  '#.##.###.##.###.##.#',
  '#..................#',
  '#.##.#.######.#.##.#',
  '#....#...##...#....#',
  '####.### ## ###.####',
  '   #.#        #.#   ',
  '####.# ###### #.####',
  '    .  #    #  .    ',
  '####.# ###### #.####',
  '   #.#        #.#   ',
  '####.# ###### #.####',
  '#........##........#',
  '#.##.###.##.###.##.#',
  '#o.#...........#..o#',
  '##.#.#.######.#.#.##',
  '#....#...##...#....#',
  '####################',
];

export function Maze() {
  return (
    <div
      className="inline-grid font-mono text-[10px] leading-none select-none"
      style={{ gridTemplateColumns: `repeat(${MAZE[0].length}, 12px)` }}
      role="img"
      aria-label="Pac-Man maze art"
    >
      {MAZE.flatMap((row, y) =>
        row.split('').map((ch, x) => {
          let cls = 'text-transparent';
          let content: string = ch;
          if (ch === '#') cls = 'bg-primary';
          else if (ch === '.') {
            cls = 'text-pellet';
            content = '·';
          } else if (ch === 'o') {
            cls = 'text-pellet';
            content = '●';
          } else {
            content = ' ';
          }
          return (
            <span
              key={`${x}-${y}`}
              className={`w-3 h-3 grid place-items-center ${cls}`}
              aria-hidden="true"
            >
              {content}
            </span>
          );
        })
      )}
    </div>
  );
}
