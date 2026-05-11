import { useState } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Badge } from './components/Badge';
import { Input } from './components/Input';
import { PacmanLogo } from './components/PacmanLogo';
import { GhostRow } from './components/GhostRow';

function App() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen bg-surface text-white">
      <header className="border-b-2 border-dashed border-pellet">
        <div className="mx-auto max-w-6xl px-3 py-4 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <PacmanLogo />
            <h1 className="font-pixel text-base sm:text-xl text-pellet">
              PAC-UI
            </h1>
          </div>
          <nav className="flex items-center gap-2" aria-label="Primary">
            <a
              href="#components"
              className="font-pixel text-[10px] uppercase text-white hover:text-pellet"
            >
              Components
            </a>
            <a
              href="#tokens"
              className="font-pixel text-[10px] uppercase text-white hover:text-pellet"
            >
              Tokens
            </a>
            <a
              href="https://github.com"
              className="font-pixel text-[10px] uppercase text-white hover:text-pellet"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-3 py-6 space-y-8">
        <section aria-labelledby="hero" className="text-center py-6">
          <h2
            id="hero"
            className="font-pixel text-2xl sm:text-4xl text-pellet mb-3 leading-relaxed"
          >
            WAKA WAKA UI
          </h2>
          <p className="max-w-xl mx-auto text-sm text-secondary mb-4">
            A retro arcade-inspired component kit. High-contrast, dotted
            borders, 8-bit hearts. Built on the Pacman design system.
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Button variant="primary" onClick={() => setScore(score + 10)}>
              Eat Pellet +10
            </Button>
            <Button variant="ghost" onClick={() => setScore(0)}>
              Reset
            </Button>
          </div>
          <p className="mt-3 font-pixel text-xs text-pellet">
            SCORE: {score.toString().padStart(6, '0')}
          </p>
        </section>

        <div className="dotted-rule" role="presentation" />

        <section id="tokens" aria-labelledby="tokens-heading" className="space-y-3">
          <h3
            id="tokens-heading"
            className="font-pixel text-sm text-pellet uppercase"
          >
            Design Tokens
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { name: 'primary', hex: '#2A3FE5' },
              { name: 'secondary', hex: '#F4B9B0' },
              { name: 'success', hex: '#16A34A' },
              { name: 'warning', hex: '#D97706' },
              { name: 'danger', hex: '#DC2626' },
              { name: 'pellet', hex: '#FFD166' },
              { name: 'surface', hex: '#000000' },
              { name: 'ink', hex: '#111827' },
            ].map((t) => (
              <Card key={t.name}>
                <div
                  className="h-10 border-2 border-white"
                  style={{ background: t.hex }}
                  aria-hidden="true"
                />
                <p className="font-pixel text-[10px] mt-2 uppercase">
                  {t.name}
                </p>
                <code className="font-mono text-xs text-secondary">
                  {t.hex}
                </code>
              </Card>
            ))}
          </div>
        </section>

        <div className="dotted-rule" role="presentation" />

        <section
          id="components"
          aria-labelledby="components-heading"
          className="space-y-3"
        >
          <h3
            id="components-heading"
            className="font-pixel text-sm text-pellet uppercase"
          >
            Components
          </h3>

          <div className="grid md:grid-cols-2 gap-3">
            <Card>
              <h4 className="font-pixel text-xs text-pellet mb-2 uppercase">
                Buttons
              </h4>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </Card>

            <Card>
              <h4 className="font-pixel text-xs text-pellet mb-2 uppercase">
                Badges
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge tone="success">CLEARED</Badge>
                <Badge tone="warning">POWER UP</Badge>
                <Badge tone="danger">GHOST</Badge>
                <Badge tone="info">LEVEL 1</Badge>
              </div>
            </Card>

            <Card>
              <h4 className="font-pixel text-xs text-pellet mb-2 uppercase">
                Form
              </h4>
              <label
                htmlFor="player"
                className="block font-pixel text-[10px] uppercase mb-1"
              >
                Player Name
              </label>
              <Input
                id="player"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ENTER NAME"
                aria-describedby="player-help"
              />
              <p
                id="player-help"
                className="text-xs text-secondary mt-1 font-mono"
              >
                3-12 characters. Leaderboard initials.
              </p>
            </Card>

            <Card>
              <h4 className="font-pixel text-xs text-pellet mb-2 uppercase">
                Ghosts
              </h4>
              <GhostRow />
              <p className="text-xs text-secondary mt-2 font-mono">
                Blinky, Pinky, Inky, Clyde.
              </p>
            </Card>
          </div>
        </section>

        <div className="dotted-rule" role="presentation" />

        <section aria-labelledby="rules-heading" className="space-y-2">
          <h3
            id="rules-heading"
            className="font-pixel text-sm text-pellet uppercase"
          >
            House Rules
          </h3>
          <ul className="space-y-1 list-none">
            {[
              'Prefer semantic tokens over raw values.',
              'Preserve visual hierarchy — pixel headings, mono body.',
              'Maintain 44px minimum touch targets.',
              'Respect prefers-reduced-motion for chomp animations.',
            ].map((rule) => (
              <li key={rule} className="flex gap-2 items-start">
                <span aria-hidden="true" className="text-pellet">
                  ●
                </span>
                <span className="text-sm">{rule}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t-2 border-dashed border-pellet mt-8">
        <div className="mx-auto max-w-6xl px-3 py-3 text-center">
          <p className="font-pixel text-[10px] text-secondary uppercase">
            INSERT COIN — Built with typeui.sh pacman
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
