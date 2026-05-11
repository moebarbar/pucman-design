# pucman-design

A Vite + React + TypeScript + Tailwind starter wired to the **Pacman** design
system from [typeui.sh](https://typeui.sh).

The design-system skill lives in `.claude/skills/design-system/SKILL.md` (and
`.agents/skills/design-system/SKILL.md`) and was pulled with:

```bash
npx typeui.sh pull pacman -f skill -p claude-code
```

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 3 with Pacman tokens (palette, fonts, 8pt grid, pixel shadows)
- Press Start 2P + Space Mono via Google Fonts

## Scripts

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
npm run lint
```

## Layout

```
src/
  App.tsx              # demo page wiring everything together
  index.css            # tailwind layers + pacman base styles
  components/
    Button.tsx         # primary / secondary / danger / ghost variants
    Badge.tsx          # success / warning / danger / info tones
    Card.tsx           # dotted-bordered surface
    Input.tsx          # pixel-font text input
    PacmanLogo.tsx     # animated chomping pacman SVG
    GhostRow.tsx       # Blinky / Pinky / Inky / Clyde
tailwind.config.js     # palette, fontFamily, spacing, pixel shadows
```

## Tokens

Defined in `tailwind.config.js`:

| Token       | Value     |
| ----------- | --------- |
| `primary`   | `#2A3FE5` |
| `secondary` | `#F4B9B0` |
| `success`   | `#16A34A` |
| `warning`   | `#D97706` |
| `danger`    | `#DC2626` |
| `pellet`    | `#FFD166` |
| `surface`   | `#000000` |
| `ink`       | `#111827` |

## Accessibility

- Visible focus rings (`:focus-visible` -> 3px pellet outline).
- 44px minimum touch targets on `.pixel-btn`.
- `prefers-reduced-motion` disables the chomp animation.
- Semantic landmarks (`header` / `main` / `footer`) with labelled sections.
