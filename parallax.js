// Mouse parallax for the homepage bento photo.
// The photo drifts opposite to the cursor (eased) and settles back when the cursor leaves.
(function () {
    var panel = document.querySelector('.center-bento');
    if (!panel) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var MAX = 22; // max shift in px (keep below the 28px overscan in style.css)
    var target = { x: 0, y: 0 };
    var current = { x: 0, y: 0 };
    var running = false;

    function tick() {
        current.x += (target.x - current.x) * 0.08;
        current.y += (target.y - current.y) * 0.08;
        panel.style.setProperty('--px', current.x.toFixed(2) + 'px');
        panel.style.setProperty('--py', current.y.toFixed(2) + 'px');

        if (Math.abs(target.x - current.x) > 0.05 || Math.abs(target.y - current.y) > 0.05) {
            requestAnimationFrame(tick);
        } else {
            running = false;
        }
    }

    function go() {
        if (!running) {
            running = true;
            requestAnimationFrame(tick);
        }
    }

    panel.addEventListener('pointermove', function (e) {
        var r = panel.getBoundingClientRect();
        var nx = (e.clientX - r.left) / r.width - 0.5;   // -0.5 .. 0.5
        var ny = (e.clientY - r.top) / r.height - 0.5;
        target.x = -nx * 2 * MAX;
        target.y = -ny * 2 * MAX;
        go();
    });

    panel.addEventListener('pointerleave', function () {
        target.x = 0;
        target.y = 0;
        go();
    });
})();
