import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-3"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-surface border-2 border-pellet shadow-pixel-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b-2 border-dashed border-pellet px-3 py-2">
          <h2 id="modal-title" className="font-pixel text-xs uppercase text-pellet">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="font-pixel text-xs text-pellet hover:text-white px-2 py-1 min-h-[44px] min-w-[44px]"
          >
            X
          </button>
        </div>
        <div className="p-3 text-sm font-mono text-white">{children}</div>
      </div>
    </div>
  );
}
