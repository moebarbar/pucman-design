import { useState } from 'react';
import type { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export function Tabs({ items, initial }: { items: TabItem[]; initial?: string }) {
  const [active, setActive] = useState(initial ?? items[0]?.id);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Showcase tabs"
        className="flex flex-wrap gap-0 border-b-2 border-dashed border-pellet"
      >
        {items.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              className={`font-pixel text-[10px] uppercase px-3 py-2 min-h-[44px] border-2 border-b-0 ${
                selected
                  ? 'bg-pellet text-black border-pellet'
                  : 'bg-black text-pellet border-pellet/40 hover:border-pellet'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`panel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          hidden={item.id !== active}
          className="p-3 border-2 border-pellet border-t-0 bg-black"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
