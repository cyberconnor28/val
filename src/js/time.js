const el = document.getElementById("since");

if (el) {
  const START = "2024-03-04T15:25:00Z";
  const startMs = new Date(START).getTime();

  const pad = (n) => String(n).padStart(2, "0");

  function render() {
    const diff = Math.max(0, Date.now() - startMs);
    const s = Math.floor(diff / 1000);

    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);

    el.textContent = `${d} дней ${pad(h)} ч ${pad(m)} мин`;
  }

  render();
  setInterval(render, 1000);
}
