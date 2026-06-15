export function asset(p: string): string {
  return `${import.meta.env.BASE_URL}assets/${p}`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function setMeta(title: string, description?: string) {
  document.title = title;
  if (description) {
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", description);
  }
}
