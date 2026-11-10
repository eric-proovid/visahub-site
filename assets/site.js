// Day/night globe: flips every few seconds until the power button is used, which then switches it by hand. Stays still under prefers-reduced-motion.
(function () {
  var g = document.querySelector('.globe');
  if (!g) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var btn = g.querySelector('.power');
  var timer = null;
  function flip() {
    var day = g.classList.toggle('is-day');
    if (btn) btn.setAttribute('aria-pressed', day ? 'true' : 'false');
  }
  function start() { if (!reduce) timer = setInterval(flip, 5000); }
  if (btn) btn.addEventListener('click', function () { clearInterval(timer); flip(); });
  start();
})();
