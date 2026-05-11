import { useEffect, useState } from 'react';
import { setToastListener } from './toast-bus';

export function ToastHost() {
  const [items, setItems] = useState<{ id: number; msg: string }[]>([]);

  useEffect(() => {
    setToastListener((msg: string) => {
      const id = Date.now() + Math.random();
      setItems((prev) => [...prev, { id, msg }]);
      setTimeout(() => {
        setItems((prev) => prev.filter((t) => t.id !== id));
      }, 2400);
    });
    return () => setToastListener(null);
  }, []);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-3 right-3 z-50 flex flex-col gap-2 max-w-xs"
    >
      {items.map((t) => (
        <div
          key={t.id}
          className="bg-pellet text-black border-2 border-black shadow-pixel font-pixel text-[10px] uppercase px-2 py-2"
        >
          {t.msg}
        </div>
      ))}
    </div>
  );
}
