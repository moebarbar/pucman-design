import { useState } from 'react';
import { Alert } from './components/Alert';
import { Badge } from './components/Badge';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { GhostRow } from './components/GhostRow';
import { Input } from './components/Input';
import { Maze } from './components/Maze';
import { Modal } from './components/Modal';
import { PacmanLogo } from './components/PacmanLogo';
import { Progress } from './components/Progress';
import { Scoreboard } from './components/Scoreboard';
import { Select } from './components/Select';
import { Switch } from './components/Switch';
import { Tabs } from './components/Tabs';
import { ToastHost } from './components/Toast';
import { notify } from './components/toast-bus';

const TOKENS = [
  { name: 'primary', hex: '#2A3FE5', use: 'maze walls, links' },
  { name: 'secondary', hex: '#F4B9B0', use: 'soft text accents' },
  { name: 'success', hex: '#16A34A', use: 'cleared states' },
  { name: 'warning', hex: '#D97706', use: 'power-up timers' },
  { name: 'danger', hex: '#DC2626', use: 'ghost / errors' },
  { name: 'info', hex: '#0EA5E9', use: 'tutorials' },
  { name: 'pellet', hex: '#FFD166', use: 'focus, score, dots' },
  { name: 'surface', hex: '#000000', use: 'maze background' },
];

const TYPESCALE = [
  { name: 'display', sample: 'WAKA', cls: 'font-pixel text-3xl text-pellet' },
  { name: 'h1', sample: 'GAME ON', cls: 'font-pixel text-xl text-pellet' },
  { name: 'h2', sample: 'LEVEL 1', cls: 'font-pixel text-base text-pellet' },
  { name: 'body', sample: 'Chase the pellets.', cls: 'font-mono text-base' },
  { name: 'caption', sample: 'press start', cls: 'font-pixel text-[10px] uppercase' },
];

function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [powerActive, setPowerActive] = useState(false);
  const [muted, setMuted] = useState(false);
  const [ghost, setGhost] = useState('blinky');
  const [name, setName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const eatPellet = () => {
    setScore((s) => s + 10);
    notify('+10 pellet');
  };
  const eatPower = () => {
    setScore((s) => s + 50);
    setPowerActive(true);
    notify('POWER UP!');
    setTimeout(() => setPowerActive(false), 4000);
  };
  const loseLife = () => {
    if (lives <= 0) return;
    setLives((l) => l - 1);
    notify('Caught by a ghost');
  };
  const nextLevel = () => {
    setLevel((l) => l + 1);
    setScore((s) => s + 1000);
    notify(`Level ${level + 1}`);
  };

  return (
    <div className="min-h-screen bg-surface text-white">
      <ToastHost />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-pellet focus:text-black focus:font-pixel focus:text-[10px] focus:px-2 focus:py-1"
      >
        Skip to content
      </a>

      <header className="border-b-2 border-dashed border-pellet sticky top-0 z-40 bg-surface">
        <div className="mx-auto max-w-6xl px-3 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <PacmanLogo />
            <div>
              <h1 className="font-pixel text-base sm:text-lg text-pellet leading-none">
                PAC-UI
              </h1>
              <p className="font-pixel text-[8px] uppercase text-secondary mt-1">
                typeui.sh · pacman
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-3" aria-label="Primary">
            {[
              ['#tokens', 'Tokens'],
              ['#typography', 'Type'],
              ['#components', 'Components'],
              ['#game', 'Game'],
              ['#docs', 'Docs'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-pixel text-[10px] uppercase text-white hover:text-pellet"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-3 py-6 space-y-10">
        {/* HERO */}
        <section aria-labelledby="hero" className="grid md:grid-cols-2 gap-6 items-center py-6">
          <div>
            <p className="font-pixel text-[10px] uppercase text-pellet mb-3">
              ▸ Insert coin
            </p>
            <h2
              id="hero"
              className="font-pixel text-2xl sm:text-4xl text-pellet mb-4 leading-relaxed"
            >
              WAKA WAKA UI
            </h2>
            <p className="text-base text-secondary mb-4 max-w-md">
              A retro arcade component kit built on the Pacman design system.
              High-contrast pixel surfaces, dotted borders, 8-bit hearts —
              wired with WCAG 2.2 AA defaults.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" onClick={eatPellet}>
                Eat Pellet
              </Button>
              <Button variant="secondary" onClick={eatPower}>
                Power Up
              </Button>
              <Button variant="ghost" onClick={() => setModalOpen(true)}>
                How to Play
              </Button>
            </div>
            <dl className="mt-4 flex gap-4 font-pixel text-[10px] uppercase">
              <div>
                <dt className="text-secondary">Score</dt>
                <dd className="text-pellet text-base mt-1 tabular-nums">
                  {score.toString().padStart(6, '0')}
                </dd>
              </div>
              <div>
                <dt className="text-secondary">Lives</dt>
                <dd className="text-pellet text-base mt-1">{'♥'.repeat(Math.max(0, lives))}</dd>
              </div>
              <div>
                <dt className="text-secondary">Level</dt>
                <dd className="text-pellet text-base mt-1 tabular-nums">{level}</dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-center">
            <Maze />
          </div>
        </section>

        <div className="dotted-rule" role="presentation" />

        {/* TOKENS */}
        <section id="tokens" aria-labelledby="tokens-heading" className="space-y-3">
          <header>
            <h3 id="tokens-heading" className="font-pixel text-sm text-pellet uppercase">
              Design Tokens
            </h3>
            <p className="text-sm text-secondary mt-1">
              Semantic color tokens. Always reference these — never raw hex.
            </p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {TOKENS.map((t) => (
              <Card key={t.name}>
                <div
                  className="h-12 border-2 border-white"
                  style={{ background: t.hex }}
                  aria-hidden="true"
                />
                <p className="font-pixel text-[10px] mt-2 uppercase text-pellet">
                  {t.name}
                </p>
                <code className="font-mono text-xs text-white block">{t.hex}</code>
                <p className="font-mono text-xs text-secondary mt-1">{t.use}</p>
              </Card>
            ))}
          </div>
        </section>

        <div className="dotted-rule" role="presentation" />

        {/* TYPOGRAPHY */}
        <section
          id="typography"
          aria-labelledby="typography-heading"
          className="space-y-3"
        >
          <header>
            <h3 id="typography-heading" className="font-pixel text-sm text-pellet uppercase">
              Typography
            </h3>
            <p className="text-sm text-secondary mt-1">
              Press Start 2P for headings and pixel UI. Space Mono for body and
              data.
            </p>
          </header>
          <Card>
            <table className="w-full">
              <thead className="sr-only">
                <tr>
                  <th>Role</th>
                  <th>Sample</th>
                </tr>
              </thead>
              <tbody>
                {TYPESCALE.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b-2 border-dashed border-pellet/40 last:border-0"
                  >
                    <td className="font-pixel text-[10px] uppercase text-secondary py-2 align-top w-24">
                      {row.name}
                    </td>
                    <td className={`py-2 ${row.cls}`}>{row.sample}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>

        <div className="dotted-rule" role="presentation" />

        {/* COMPONENTS */}
        <section
          id="components"
          aria-labelledby="components-heading"
          className="space-y-3"
        >
          <header>
            <h3 id="components-heading" className="font-pixel text-sm text-pellet uppercase">
              Components
            </h3>
            <p className="text-sm text-secondary mt-1">
              All interactive surfaces meet 44px touch targets and visible
              focus contracts.
            </p>
          </header>

          <Tabs
            items={[
              {
                id: 'actions',
                label: 'Actions',
                content: (
                  <div className="space-y-4">
                    <div>
                      <p className="font-pixel text-[10px] uppercase text-secondary mb-2">
                        Buttons
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="primary" disabled>
                          Disabled
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="font-pixel text-[10px] uppercase text-secondary mb-2">
                        Badges
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge tone="success">CLEARED</Badge>
                        <Badge tone="warning">POWER UP</Badge>
                        <Badge tone="danger">GHOST</Badge>
                        <Badge tone="info">LEVEL {level}</Badge>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: 'forms',
                label: 'Forms',
                content: (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="player"
                        className="block font-pixel text-[10px] uppercase mb-1 text-secondary"
                      >
                        Player initials
                      </label>
                      <Input
                        id="player"
                        value={name}
                        onChange={(e) => setName(e.target.value.toUpperCase().slice(0, 3))}
                        placeholder="AAA"
                        maxLength={3}
                        aria-describedby="player-help"
                      />
                      <p id="player-help" className="text-xs text-secondary mt-1 font-mono">
                        3 characters max.
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="ghost-select"
                        className="block font-pixel text-[10px] uppercase mb-1 text-secondary"
                      >
                        Favorite ghost
                      </label>
                      <Select
                        id="ghost-select"
                        value={ghost}
                        onChange={(e) => setGhost(e.target.value)}
                        options={[
                          { value: 'blinky', label: 'BLINKY' },
                          { value: 'pinky', label: 'PINKY' },
                          { value: 'inky', label: 'INKY' },
                          { value: 'clyde', label: 'CLYDE' },
                        ]}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Switch
                        checked={muted}
                        onChange={setMuted}
                        label={muted ? 'Sound off' : 'Sound on'}
                      />
                    </div>
                  </div>
                ),
              },
              {
                id: 'feedback',
                label: 'Feedback',
                content: (
                  <div className="space-y-3">
                    <Alert tone="info">
                      Use ARROW keys to move. Eat all pellets to clear the
                      maze.
                    </Alert>
                    <Alert tone="success">
                      Stage cleared. +1000 bonus points.
                    </Alert>
                    <Alert tone="warning">
                      Power-up ends in 3 seconds. Eat ghosts now.
                    </Alert>
                    <Alert tone="danger">
                      All lives lost. Insert coin to continue.
                    </Alert>
                  </div>
                ),
              },
              {
                id: 'data',
                label: 'Data',
                content: <Scoreboard />,
              },
              {
                id: 'meta',
                label: 'Meta',
                content: (
                  <div className="space-y-3">
                    <Progress value={score % 1000} max={1000} label="Next 1UP" />
                    <Progress value={level} max={21} label="Level progress" />
                    <Progress value={lives} max={5} label="Lives" />
                    <GhostRow />
                  </div>
                ),
              },
            ]}
          />
        </section>

        <div className="dotted-rule" role="presentation" />

        {/* GAME PANEL */}
        <section id="game" aria-labelledby="game-heading" className="space-y-3">
          <header>
            <h3 id="game-heading" className="font-pixel text-sm text-pellet uppercase">
              Game State
            </h3>
            <p className="text-sm text-secondary mt-1">
              A composed example showing how the primitives stack into a real
              game UI.
            </p>
          </header>
          <div className="grid md:grid-cols-3 gap-3">
            <Card>
              <p className="font-pixel text-[10px] uppercase text-secondary">
                Score
              </p>
              <p className="font-pixel text-2xl text-pellet mt-2 tabular-nums">
                {score.toString().padStart(6, '0')}
              </p>
              <Progress value={score % 1000} max={1000} label="Next 1UP" />
            </Card>
            <Card>
              <p className="font-pixel text-[10px] uppercase text-secondary">
                Power state
              </p>
              <div className="mt-2">
                {powerActive ? (
                  <Badge tone="warning">POWER ACTIVE</Badge>
                ) : (
                  <Badge tone="info">IDLE</Badge>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="secondary" onClick={eatPower}>
                  Power Pellet
                </Button>
                <Button variant="danger" onClick={loseLife} disabled={lives === 0}>
                  Take Hit
                </Button>
              </div>
            </Card>
            <Card>
              <p className="font-pixel text-[10px] uppercase text-secondary">
                Round
              </p>
              <p className="font-pixel text-2xl text-pellet mt-2 tabular-nums">
                {level.toString().padStart(2, '0')}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="primary" onClick={nextLevel}>
                  Next Level
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setScore(0);
                    setLives(3);
                    setLevel(1);
                    notify('Reset');
                  }}
                >
                  Reset
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <div className="dotted-rule" role="presentation" />

        {/* DOCS */}
        <section id="docs" aria-labelledby="docs-heading" className="space-y-3">
          <header>
            <h3 id="docs-heading" className="font-pixel text-sm text-pellet uppercase">
              House Rules
            </h3>
            <p className="text-sm text-secondary mt-1">
              The non-negotiable expectations for everything shipped on this
              system.
            </p>
          </header>
          <div className="grid md:grid-cols-2 gap-3">
            <Card>
              <p className="font-pixel text-[10px] uppercase text-success mb-2">
                Do
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  'Use semantic tokens, never raw hex.',
                  'Preserve hierarchy: pixel for chrome, mono for data.',
                  '44px+ touch targets on every interactive element.',
                  'Respect prefers-reduced-motion for chomp + transitions.',
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden="true" className="text-success">
                      ●
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="font-pixel text-[10px] uppercase text-danger mb-2">
                Don't
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  'Mix multiple visual metaphors.',
                  'Drop contrast below WCAG 2.2 AA.',
                  'Use decorative motion without purpose.',
                  'Ship ambiguous labels — every CTA names the verb.',
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden="true" className="text-danger">
                      ✕
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-dashed border-pellet mt-10">
        <div className="mx-auto max-w-6xl px-3 py-4 text-center space-y-1">
          <p className="font-pixel text-[10px] text-pellet uppercase">
            INSERT COIN
          </p>
          <p className="font-mono text-xs text-secondary">
            Built with{' '}
            <code className="text-pellet">npx typeui.sh pull pacman</code>
          </p>
        </div>
      </footer>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="How to Play">
        <ol className="space-y-2 list-decimal pl-4">
          <li>Use the arrow keys to navigate the maze.</li>
          <li>Eat all the pellets to clear the stage.</li>
          <li>Power pellets let you chase ghosts. They reset after 4s.</li>
          <li>Avoid Blinky, Pinky, Inky, and Clyde — or you lose a life.</li>
        </ol>
        <div className="mt-4 flex justify-end">
          <Button variant="primary" onClick={() => setModalOpen(false)}>
            Got it
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
