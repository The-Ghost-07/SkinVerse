/* SkinVerse — site-entry intro. Runs on index.html only. */
(function () {
  var root = document.documentElement;
  var intro = document.getElementById("intro");
  if (!intro || root.classList.contains("skip-intro")) return;

  // play once per browser session (clear this key to see it again)
  try { sessionStorage.setItem("sv-intro", "1"); } catch (e) {}

  var fly = intro.querySelector(".in-fly");
  var navLogo = document.querySelector(".side-nav .logo-bg1");
  var leaving = false;

  function leave() {
    if (leaving) return;
    leaving = true;

    // where is the real nav logo, relative to where the big one sits?
    // (scaling happens around the centre, so centres are all we need)
    var a = fly.getBoundingClientRect();
    var b = navLogo.getBoundingClientRect();
    fly.style.setProperty("--dx", (b.left + b.width / 2) - (a.left + a.width / 2) + "px");
    fly.style.setProperty("--dy", (b.top + b.height / 2) - (a.top + a.height / 2) + "px");

    intro.classList.add("is-leaving");   // curtain fades, logo flies, text drops out
    root.classList.add("intro-leaving"); // page scales/fades in underneath

    // once the logo has landed: show the real nav logo, remove the overlay
    setTimeout(function () {
      root.classList.add("intro-done");
      intro.remove();
    }, 1150);
  }

  setTimeout(leave, 2900);               // end of the loader bar
  intro.addEventListener("click", leave); // click anywhere to skip
})();
