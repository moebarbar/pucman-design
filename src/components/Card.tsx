import type { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <div className="pixel-card">{children}</div>;
}
