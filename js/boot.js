document.addEventListener("DOMContentLoaded", () => {
  const bootText = "booting profile.sh ... loading ~/kexnyxie ... done";
  const el = document.getElementById("boot-line");
  if (!el) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReduced) {
    el.textContent = bootText;
  } else {
    let i = 0;
    function type() {
      if (i <= bootText.length) {
        el.textContent = bootText.slice(0, i);
        i++;
        setTimeout(type, 18);
      }
    }
    type();
  }
});
