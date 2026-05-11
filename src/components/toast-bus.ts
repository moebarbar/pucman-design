type Listener = (msg: string) => void;

let listener: Listener | null = null;

export function setToastListener(l: Listener | null) {
  listener = l;
}

export function notify(msg: string) {
  listener?.(msg);
}
